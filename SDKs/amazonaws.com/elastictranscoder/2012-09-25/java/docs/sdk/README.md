# SDK

## Overview

<fullname>AWS Elastic Transcoder Service</fullname> <p>The AWS Elastic Transcoder Service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/elastictranscoder/>
### Available Operations

* [cancelJob](#canceljob) - <p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>
* [createJob](#createjob) - <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>
* [createPipeline](#createpipeline) - The CreatePipeline operation creates a pipeline with settings that you specify.
* [createPreset](#createpreset) - <p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>
* [deletePipeline](#deletepipeline) - <p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>
* [deletePreset](#deletepreset) - <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>
* [listJobsByPipeline](#listjobsbypipeline) - <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>
* [listJobsByStatus](#listjobsbystatus) - The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.
* [listPipelines](#listpipelines) - The ListPipelines operation gets a list of the pipelines associated with the current AWS account.
* [listPresets](#listpresets) - The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.
* [readJob](#readjob) - The ReadJob operation returns detailed information about a job.
* [readPipeline](#readpipeline) - The ReadPipeline operation gets detailed information about a pipeline.
* [readPreset](#readpreset) - The ReadPreset operation gets detailed information about a preset.
* [~~testRole~~](#testrole) - <p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p> :warning: **Deprecated**
* [updatePipeline](#updatepipeline) - <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>
* [updatePipelineNotifications](#updatepipelinenotifications) - <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
* [updatePipelineStatus](#updatepipelinestatus) - <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>

## cancelJob

<p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelJobRequest;
import org.openapis.openapi.models.operations.CancelJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelJobRequest req = new CancelJobRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            CancelJobResponse res = sdk.sdk.cancelJob(req);

            if (res.cancelJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createJob

<p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateJobRequest;
import org.openapis.openapi.models.operations.CreateJobRequestBody;
import org.openapis.openapi.models.operations.CreateJobRequestBodyInput;
import org.openapis.openapi.models.operations.CreateJobRequestBodyOutput;
import org.openapis.openapi.models.operations.CreateJobResponse;
import org.openapis.openapi.models.shared.Artwork;
import org.openapis.openapi.models.shared.CaptionFormat;
import org.openapis.openapi.models.shared.CaptionSource;
import org.openapis.openapi.models.shared.Captions;
import org.openapis.openapi.models.shared.Clip;
import org.openapis.openapi.models.shared.CreateJobOutput;
import org.openapis.openapi.models.shared.CreateJobPlaylist;
import org.openapis.openapi.models.shared.DetectedProperties;
import org.openapis.openapi.models.shared.Encryption;
import org.openapis.openapi.models.shared.HlsContentProtection;
import org.openapis.openapi.models.shared.InputCaptions;
import org.openapis.openapi.models.shared.JobAlbumArt;
import org.openapis.openapi.models.shared.JobInput;
import org.openapis.openapi.models.shared.JobWatermark;
import org.openapis.openapi.models.shared.PlayReadyDrm;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimeSpan;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateJobRequest req = new CreateJobRequest(                new CreateJobRequestBody("molestiae") {{
                                input = new CreateJobRequestBodyInput() {{
                                    aspectRatio = "minus";
                                    container = "placeat";
                                    detectedProperties = new DetectedProperties() {{
                                        durationMillis = 528895L;
                                        fileSize = 479977L;
                                        frameRate = "excepturi";
                                        height = 392785L;
                                        width = 925597L;
                                    }};;
                                    encryption = new Encryption() {{
                                        initializationVector = "temporibus";
                                        key = "ab";
                                        keyMd5 = "quis";
                                        mode = "veritatis";
                                    }};;
                                    frameRate = "deserunt";
                                    inputCaptions = new InputCaptions() {{
                                        captionSources = new org.openapis.openapi.models.shared.CaptionSource[]{{
                                            add(new CaptionSource() {{
                                                encryption = new Encryption() {{
                                                    initializationVector = "ipsam";
                                                    key = "repellendus";
                                                    keyMd5 = "sapiente";
                                                    mode = "quo";
                                                }};
                                                key = "odit";
                                                label = "at";
                                                language = "at";
                                                timeOffset = "maiores";
                                            }}),
                                        }};
                                        mergePolicy = "molestiae";
                                    }};;
                                    interlaced = "quod";
                                    key = "quod";
                                    resolution = "esse";
                                    timeSpan = new TimeSpan() {{
                                        duration = "totam";
                                        startTime = "porro";
                                    }};;
                                }};;
                                inputs = new org.openapis.openapi.models.shared.JobInput[]{{
                                    add(new JobInput() {{
                                        aspectRatio = "dicta";
                                        container = "nam";
                                        detectedProperties = new DetectedProperties() {{
                                            durationMillis = 639921L;
                                            fileSize = 582020L;
                                            frameRate = "fugit";
                                            height = 537373L;
                                            width = 944669L;
                                        }};
                                        encryption = new Encryption() {{
                                            initializationVector = "optio";
                                            key = "totam";
                                            keyMd5 = "beatae";
                                            mode = "commodi";
                                        }};
                                        frameRate = "molestiae";
                                        inputCaptions = new InputCaptions() {{
                                            captionSources = new org.openapis.openapi.models.shared.CaptionSource[]{{
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "qui";
                                                        key = "impedit";
                                                        keyMd5 = "cum";
                                                        mode = "esse";
                                                    }};
                                                    key = "ipsum";
                                                    label = "excepturi";
                                                    language = "aspernatur";
                                                    timeOffset = "perferendis";
                                                }}),
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "ad";
                                                        key = "natus";
                                                        keyMd5 = "sed";
                                                        mode = "iste";
                                                    }};
                                                    key = "dolor";
                                                    label = "natus";
                                                    language = "laboriosam";
                                                    timeOffset = "hic";
                                                }}),
                                            }};
                                            mergePolicy = "saepe";
                                        }};
                                        interlaced = "fuga";
                                        key = "in";
                                        resolution = "corporis";
                                        timeSpan = new TimeSpan() {{
                                            duration = "iste";
                                            startTime = "iure";
                                        }};
                                    }}),
                                    add(new JobInput() {{
                                        aspectRatio = "saepe";
                                        container = "quidem";
                                        detectedProperties = new DetectedProperties() {{
                                            durationMillis = 99280L;
                                            fileSize = 60225L;
                                            frameRate = "reiciendis";
                                            height = 666767L;
                                            width = 653140L;
                                        }};
                                        encryption = new Encryption() {{
                                            initializationVector = "laborum";
                                            key = "dolores";
                                            keyMd5 = "dolorem";
                                            mode = "corporis";
                                        }};
                                        frameRate = "explicabo";
                                        inputCaptions = new InputCaptions() {{
                                            captionSources = new org.openapis.openapi.models.shared.CaptionSource[]{{
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "enim";
                                                        key = "omnis";
                                                        keyMd5 = "nemo";
                                                        mode = "minima";
                                                    }};
                                                    key = "excepturi";
                                                    label = "accusantium";
                                                    language = "iure";
                                                    timeOffset = "culpa";
                                                }}),
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "doloribus";
                                                        key = "sapiente";
                                                        keyMd5 = "architecto";
                                                        mode = "mollitia";
                                                    }};
                                                    key = "dolorem";
                                                    label = "culpa";
                                                    language = "consequuntur";
                                                    timeOffset = "repellat";
                                                }}),
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "mollitia";
                                                        key = "occaecati";
                                                        keyMd5 = "numquam";
                                                        mode = "commodi";
                                                    }};
                                                    key = "quam";
                                                    label = "molestiae";
                                                    language = "velit";
                                                    timeOffset = "error";
                                                }}),
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "quia";
                                                        key = "quis";
                                                        keyMd5 = "vitae";
                                                        mode = "laborum";
                                                    }};
                                                    key = "animi";
                                                    label = "enim";
                                                    language = "odit";
                                                    timeOffset = "quo";
                                                }}),
                                            }};
                                            mergePolicy = "sequi";
                                        }};
                                        interlaced = "tenetur";
                                        key = "ipsam";
                                        resolution = "id";
                                        timeSpan = new TimeSpan() {{
                                            duration = "possimus";
                                            startTime = "aut";
                                        }};
                                    }}),
                                    add(new JobInput() {{
                                        aspectRatio = "quasi";
                                        container = "error";
                                        detectedProperties = new DetectedProperties() {{
                                            durationMillis = 837945L;
                                            fileSize = 673660L;
                                            frameRate = "quasi";
                                            height = 971945L;
                                            width = 976460L;
                                        }};
                                        encryption = new Encryption() {{
                                            initializationVector = "vero";
                                            key = "nihil";
                                            keyMd5 = "praesentium";
                                            mode = "voluptatibus";
                                        }};
                                        frameRate = "ipsa";
                                        inputCaptions = new InputCaptions() {{
                                            captionSources = new org.openapis.openapi.models.shared.CaptionSource[]{{
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "voluptate";
                                                        key = "cum";
                                                        keyMd5 = "perferendis";
                                                        mode = "doloremque";
                                                    }};
                                                    key = "reprehenderit";
                                                    label = "ut";
                                                    language = "maiores";
                                                    timeOffset = "dicta";
                                                }}),
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "corporis";
                                                        key = "dolore";
                                                        keyMd5 = "iusto";
                                                        mode = "dicta";
                                                    }};
                                                    key = "harum";
                                                    label = "enim";
                                                    language = "accusamus";
                                                    timeOffset = "commodi";
                                                }}),
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "repudiandae";
                                                        key = "quae";
                                                        keyMd5 = "ipsum";
                                                        mode = "quidem";
                                                    }};
                                                    key = "molestias";
                                                    label = "excepturi";
                                                    language = "pariatur";
                                                    timeOffset = "modi";
                                                }}),
                                            }};
                                            mergePolicy = "praesentium";
                                        }};
                                        interlaced = "rem";
                                        key = "voluptates";
                                        resolution = "quasi";
                                        timeSpan = new TimeSpan() {{
                                            duration = "repudiandae";
                                            startTime = "sint";
                                        }};
                                    }}),
                                }};
                                output = new CreateJobRequestBodyOutput() {{
                                    albumArt = new JobAlbumArt() {{
                                        artwork = new org.openapis.openapi.models.shared.Artwork[]{{
                                            add(new Artwork() {{
                                                albumArtFormat = "itaque";
                                                encryption = new Encryption() {{
                                                    initializationVector = "incidunt";
                                                    key = "enim";
                                                    keyMd5 = "consequatur";
                                                    mode = "est";
                                                }};
                                                inputKey = "quibusdam";
                                                maxHeight = "explicabo";
                                                maxWidth = "deserunt";
                                                paddingPolicy = "distinctio";
                                                sizingPolicy = "quibusdam";
                                            }}),
                                        }};
                                        mergePolicy = "labore";
                                    }};;
                                    captions = new Captions() {{
                                        captionFormats = new org.openapis.openapi.models.shared.CaptionFormat[]{{
                                            add(new CaptionFormat() {{
                                                encryption = new Encryption() {{
                                                    initializationVector = "qui";
                                                    key = "aliquid";
                                                    keyMd5 = "cupiditate";
                                                    mode = "quos";
                                                }};
                                                format = "perferendis";
                                                pattern = "magni";
                                            }}),
                                            add(new CaptionFormat() {{
                                                encryption = new Encryption() {{
                                                    initializationVector = "assumenda";
                                                    key = "ipsam";
                                                    keyMd5 = "alias";
                                                    mode = "fugit";
                                                }};
                                                format = "dolorum";
                                                pattern = "excepturi";
                                            }}),
                                        }};
                                        captionSources = new org.openapis.openapi.models.shared.CaptionSource[]{{
                                            add(new CaptionSource() {{
                                                encryption = new Encryption() {{
                                                    initializationVector = "facilis";
                                                    key = "tempore";
                                                    keyMd5 = "labore";
                                                    mode = "delectus";
                                                }};
                                                key = "eum";
                                                label = "non";
                                                language = "eligendi";
                                                timeOffset = "sint";
                                            }}),
                                            add(new CaptionSource() {{
                                                encryption = new Encryption() {{
                                                    initializationVector = "aliquid";
                                                    key = "provident";
                                                    keyMd5 = "necessitatibus";
                                                    mode = "sint";
                                                }};
                                                key = "officia";
                                                label = "dolor";
                                                language = "debitis";
                                                timeOffset = "a";
                                            }}),
                                        }};
                                        mergePolicy = "dolorum";
                                    }};;
                                    composition = new org.openapis.openapi.models.shared.Clip[]{{
                                        add(new Clip() {{
                                            timeSpan = new TimeSpan() {{
                                                duration = "in";
                                                startTime = "illum";
                                            }};
                                        }}),
                                        add(new Clip() {{
                                            timeSpan = new TimeSpan() {{
                                                duration = "maiores";
                                                startTime = "rerum";
                                            }};
                                        }}),
                                    }};
                                    encryption = new Encryption() {{
                                        initializationVector = "dicta";
                                        key = "magnam";
                                        keyMd5 = "cumque";
                                        mode = "facere";
                                    }};;
                                    key = "ea";
                                    presetId = "aliquid";
                                    rotate = "laborum";
                                    segmentDuration = "accusamus";
                                    thumbnailEncryption = new Encryption() {{
                                        initializationVector = "non";
                                        key = "occaecati";
                                        keyMd5 = "enim";
                                        mode = "accusamus";
                                    }};;
                                    thumbnailPattern = "delectus";
                                    watermarks = new org.openapis.openapi.models.shared.JobWatermark[]{{
                                        add(new JobWatermark() {{
                                            encryption = new Encryption() {{
                                                initializationVector = "provident";
                                                key = "nam";
                                                keyMd5 = "id";
                                                mode = "blanditiis";
                                            }};
                                            inputKey = "deleniti";
                                            presetWatermarkId = "sapiente";
                                        }}),
                                        add(new JobWatermark() {{
                                            encryption = new Encryption() {{
                                                initializationVector = "amet";
                                                key = "deserunt";
                                                keyMd5 = "nisi";
                                                mode = "vel";
                                            }};
                                            inputKey = "natus";
                                            presetWatermarkId = "omnis";
                                        }}),
                                        add(new JobWatermark() {{
                                            encryption = new Encryption() {{
                                                initializationVector = "molestiae";
                                                key = "perferendis";
                                                keyMd5 = "nihil";
                                                mode = "magnam";
                                            }};
                                            inputKey = "distinctio";
                                            presetWatermarkId = "id";
                                        }}),
                                    }};
                                }};;
                                outputKeyPrefix = "labore";
                                outputs = new org.openapis.openapi.models.shared.CreateJobOutput[]{{
                                    add(new CreateJobOutput() {{
                                        albumArt = new JobAlbumArt() {{
                                            artwork = new org.openapis.openapi.models.shared.Artwork[]{{
                                                add(new Artwork() {{
                                                    albumArtFormat = "natus";
                                                    encryption = new Encryption() {{
                                                        initializationVector = "nobis";
                                                        key = "eum";
                                                        keyMd5 = "vero";
                                                        mode = "aspernatur";
                                                    }};
                                                    inputKey = "architecto";
                                                    maxHeight = "magnam";
                                                    maxWidth = "et";
                                                    paddingPolicy = "excepturi";
                                                    sizingPolicy = "ullam";
                                                }}),
                                                add(new Artwork() {{
                                                    albumArtFormat = "provident";
                                                    encryption = new Encryption() {{
                                                        initializationVector = "quos";
                                                        key = "sint";
                                                        keyMd5 = "accusantium";
                                                        mode = "mollitia";
                                                    }};
                                                    inputKey = "reiciendis";
                                                    maxHeight = "mollitia";
                                                    maxWidth = "ad";
                                                    paddingPolicy = "eum";
                                                    sizingPolicy = "dolor";
                                                }}),
                                            }};
                                            mergePolicy = "necessitatibus";
                                        }};
                                        captions = new Captions() {{
                                            captionFormats = new org.openapis.openapi.models.shared.CaptionFormat[]{{
                                                add(new CaptionFormat() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "nemo";
                                                        key = "quasi";
                                                        keyMd5 = "iure";
                                                        mode = "doloribus";
                                                    }};
                                                    format = "debitis";
                                                    pattern = "eius";
                                                }}),
                                            }};
                                            captionSources = new org.openapis.openapi.models.shared.CaptionSource[]{{
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "deleniti";
                                                        key = "facilis";
                                                        keyMd5 = "in";
                                                        mode = "architecto";
                                                    }};
                                                    key = "architecto";
                                                    label = "repudiandae";
                                                    language = "ullam";
                                                    timeOffset = "expedita";
                                                }}),
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "nihil";
                                                        key = "repellat";
                                                        keyMd5 = "quibusdam";
                                                        mode = "sed";
                                                    }};
                                                    key = "saepe";
                                                    label = "pariatur";
                                                    language = "accusantium";
                                                    timeOffset = "consequuntur";
                                                }}),
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "praesentium";
                                                        key = "natus";
                                                        keyMd5 = "magni";
                                                        mode = "sunt";
                                                    }};
                                                    key = "quo";
                                                    label = "illum";
                                                    language = "pariatur";
                                                    timeOffset = "maxime";
                                                }}),
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "ea";
                                                        key = "excepturi";
                                                        keyMd5 = "odit";
                                                        mode = "ea";
                                                    }};
                                                    key = "accusantium";
                                                    label = "ab";
                                                    language = "maiores";
                                                    timeOffset = "quidem";
                                                }}),
                                            }};
                                            mergePolicy = "ipsam";
                                        }};
                                        composition = new org.openapis.openapi.models.shared.Clip[]{{
                                            add(new Clip() {{
                                                timeSpan = new TimeSpan() {{
                                                    duration = "autem";
                                                    startTime = "nam";
                                                }};
                                            }}),
                                            add(new Clip() {{
                                                timeSpan = new TimeSpan() {{
                                                    duration = "eaque";
                                                    startTime = "pariatur";
                                                }};
                                            }}),
                                        }};
                                        encryption = new Encryption() {{
                                            initializationVector = "nemo";
                                            key = "voluptatibus";
                                            keyMd5 = "perferendis";
                                            mode = "fugiat";
                                        }};
                                        key = "amet";
                                        presetId = "aut";
                                        rotate = "cumque";
                                        segmentDuration = "corporis";
                                        thumbnailEncryption = new Encryption() {{
                                            initializationVector = "hic";
                                            key = "libero";
                                            keyMd5 = "nobis";
                                            mode = "dolores";
                                        }};
                                        thumbnailPattern = "quis";
                                        watermarks = new org.openapis.openapi.models.shared.JobWatermark[]{{
                                            add(new JobWatermark() {{
                                                encryption = new Encryption() {{
                                                    initializationVector = "dignissimos";
                                                    key = "eaque";
                                                    keyMd5 = "quis";
                                                    mode = "nesciunt";
                                                }};
                                                inputKey = "eos";
                                                presetWatermarkId = "perferendis";
                                            }}),
                                            add(new JobWatermark() {{
                                                encryption = new Encryption() {{
                                                    initializationVector = "dolores";
                                                    key = "minus";
                                                    keyMd5 = "quam";
                                                    mode = "dolor";
                                                }};
                                                inputKey = "vero";
                                                presetWatermarkId = "nostrum";
                                            }}),
                                            add(new JobWatermark() {{
                                                encryption = new Encryption() {{
                                                    initializationVector = "hic";
                                                    key = "recusandae";
                                                    keyMd5 = "omnis";
                                                    mode = "facilis";
                                                }};
                                                inputKey = "perspiciatis";
                                                presetWatermarkId = "voluptatem";
                                            }}),
                                        }};
                                    }}),
                                    add(new CreateJobOutput() {{
                                        albumArt = new JobAlbumArt() {{
                                            artwork = new org.openapis.openapi.models.shared.Artwork[]{{
                                                add(new Artwork() {{
                                                    albumArtFormat = "consequuntur";
                                                    encryption = new Encryption() {{
                                                        initializationVector = "blanditiis";
                                                        key = "error";
                                                        keyMd5 = "eaque";
                                                        mode = "occaecati";
                                                    }};
                                                    inputKey = "rerum";
                                                    maxHeight = "adipisci";
                                                    maxWidth = "asperiores";
                                                    paddingPolicy = "earum";
                                                    sizingPolicy = "modi";
                                                }}),
                                                add(new Artwork() {{
                                                    albumArtFormat = "iste";
                                                    encryption = new Encryption() {{
                                                        initializationVector = "dolorum";
                                                        key = "deleniti";
                                                        keyMd5 = "pariatur";
                                                        mode = "provident";
                                                    }};
                                                    inputKey = "nobis";
                                                    maxHeight = "libero";
                                                    maxWidth = "delectus";
                                                    paddingPolicy = "quaerat";
                                                    sizingPolicy = "quos";
                                                }}),
                                                add(new Artwork() {{
                                                    albumArtFormat = "aliquid";
                                                    encryption = new Encryption() {{
                                                        initializationVector = "dolorem";
                                                        key = "dolorem";
                                                        keyMd5 = "dolor";
                                                        mode = "qui";
                                                    }};
                                                    inputKey = "ipsum";
                                                    maxHeight = "hic";
                                                    maxWidth = "excepturi";
                                                    paddingPolicy = "cum";
                                                    sizingPolicy = "voluptate";
                                                }}),
                                                add(new Artwork() {{
                                                    albumArtFormat = "dignissimos";
                                                    encryption = new Encryption() {{
                                                        initializationVector = "reiciendis";
                                                        key = "amet";
                                                        keyMd5 = "dolorum";
                                                        mode = "numquam";
                                                    }};
                                                    inputKey = "veritatis";
                                                    maxHeight = "ipsa";
                                                    maxWidth = "ipsa";
                                                    paddingPolicy = "iure";
                                                    sizingPolicy = "odio";
                                                }}),
                                            }};
                                            mergePolicy = "quaerat";
                                        }};
                                        captions = new Captions() {{
                                            captionFormats = new org.openapis.openapi.models.shared.CaptionFormat[]{{
                                                add(new CaptionFormat() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "quidem";
                                                        key = "voluptatibus";
                                                        keyMd5 = "voluptas";
                                                        mode = "natus";
                                                    }};
                                                    format = "eos";
                                                    pattern = "atque";
                                                }}),
                                                add(new CaptionFormat() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "sit";
                                                        key = "fugiat";
                                                        keyMd5 = "ab";
                                                        mode = "soluta";
                                                    }};
                                                    format = "dolorum";
                                                    pattern = "iusto";
                                                }}),
                                                add(new CaptionFormat() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "voluptate";
                                                        key = "dolorum";
                                                        keyMd5 = "deleniti";
                                                        mode = "omnis";
                                                    }};
                                                    format = "necessitatibus";
                                                    pattern = "distinctio";
                                                }}),
                                                add(new CaptionFormat() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "asperiores";
                                                        key = "nihil";
                                                        keyMd5 = "ipsum";
                                                        mode = "voluptate";
                                                    }};
                                                    format = "id";
                                                    pattern = "saepe";
                                                }}),
                                            }};
                                            captionSources = new org.openapis.openapi.models.shared.CaptionSource[]{{
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "aspernatur";
                                                        key = "perferendis";
                                                        keyMd5 = "amet";
                                                        mode = "optio";
                                                    }};
                                                    key = "accusamus";
                                                    label = "ad";
                                                    language = "saepe";
                                                    timeOffset = "suscipit";
                                                }}),
                                                add(new CaptionSource() {{
                                                    encryption = new Encryption() {{
                                                        initializationVector = "deserunt";
                                                        key = "provident";
                                                        keyMd5 = "minima";
                                                        mode = "repellendus";
                                                    }};
                                                    key = "totam";
                                                    label = "similique";
                                                    language = "alias";
                                                    timeOffset = "at";
                                                }}),
                                            }};
                                            mergePolicy = "quaerat";
                                        }};
                                        composition = new org.openapis.openapi.models.shared.Clip[]{{
                                            add(new Clip() {{
                                                timeSpan = new TimeSpan() {{
                                                    duration = "vel";
                                                    startTime = "quod";
                                                }};
                                            }}),
                                            add(new Clip() {{
                                                timeSpan = new TimeSpan() {{
                                                    duration = "officiis";
                                                    startTime = "qui";
                                                }};
                                            }}),
                                        }};
                                        encryption = new Encryption() {{
                                            initializationVector = "dolorum";
                                            key = "a";
                                            keyMd5 = "esse";
                                            mode = "harum";
                                        }};
                                        key = "iusto";
                                        presetId = "ipsum";
                                        rotate = "quisquam";
                                        segmentDuration = "tenetur";
                                        thumbnailEncryption = new Encryption() {{
                                            initializationVector = "amet";
                                            key = "tempore";
                                            keyMd5 = "accusamus";
                                            mode = "numquam";
                                        }};
                                        thumbnailPattern = "enim";
                                        watermarks = new org.openapis.openapi.models.shared.JobWatermark[]{{
                                            add(new JobWatermark() {{
                                                encryption = new Encryption() {{
                                                    initializationVector = "sapiente";
                                                    key = "totam";
                                                    keyMd5 = "nihil";
                                                    mode = "sit";
                                                }};
                                                inputKey = "expedita";
                                                presetWatermarkId = "neque";
                                            }}),
                                        }};
                                    }}),
                                }};
                                playlists = new org.openapis.openapi.models.shared.CreateJobPlaylist[]{{
                                    add(new CreateJobPlaylist() {{
                                        format = "vel";
                                        hlsContentProtection = new HlsContentProtection() {{
                                            initializationVector = "libero";
                                            key = "voluptas";
                                            keyMd5 = "deserunt";
                                            keyStoragePolicy = "quam";
                                            licenseAcquisitionUrl = "ipsum";
                                            method = "incidunt";
                                        }};
                                        name = "Shelly Schoen";
                                        outputKeys = new String[]{{
                                            add("laborum"),
                                        }};
                                        playReadyDrm = new PlayReadyDrm() {{
                                            format = "totam";
                                            initializationVector = "incidunt";
                                            key = "aspernatur";
                                            keyId = "dolores";
                                            keyMd5 = "distinctio";
                                            licenseAcquisitionUrl = "facilis";
                                        }};
                                    }}),
                                }};
                                userMetadata = new java.util.HashMap<String, String>() {{
                                    put("quam", "molestias");
                                    put("temporibus", "qui");
                                }};
                            }};) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "magni";
                xAmzDate = "odio";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "nam";
            }};            

            CreateJobResponse res = sdk.sdk.createJob(req);

            if (res.createJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPipeline

The CreatePipeline operation creates a pipeline with settings that you specify.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePipelineRequest;
import org.openapis.openapi.models.operations.CreatePipelineRequestBody;
import org.openapis.openapi.models.operations.CreatePipelineRequestBodyContentConfig;
import org.openapis.openapi.models.operations.CreatePipelineRequestBodyNotifications;
import org.openapis.openapi.models.operations.CreatePipelineRequestBodyThumbnailConfig;
import org.openapis.openapi.models.operations.CreatePipelineResponse;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePipelineRequest req = new CreatePipelineRequest(                new CreatePipelineRequestBody("voluptatem", "cumque", "soluta") {{
                                awsKmsKeyArn = "nobis";
                                contentConfig = new CreatePipelineRequestBodyContentConfig() {{
                                    bucket = "et";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            access = new String[]{{
                                                add("veritatis"),
                                            }};
                                            grantee = "nobis";
                                            granteeType = "quos";
                                        }}),
                                        add(new Permission() {{
                                            access = new String[]{{
                                                add("cupiditate"),
                                                add("aperiam"),
                                                add("delectus"),
                                            }};
                                            grantee = "dolorem";
                                            granteeType = "dolore";
                                        }}),
                                        add(new Permission() {{
                                            access = new String[]{{
                                                add("adipisci"),
                                                add("dolorum"),
                                            }};
                                            grantee = "architecto";
                                            granteeType = "quae";
                                        }}),
                                        add(new Permission() {{
                                            access = new String[]{{
                                                add("quas"),
                                            }};
                                            grantee = "itaque";
                                            granteeType = "consequatur";
                                        }}),
                                    }};
                                    storageClass = "est";
                                }};;
                                notifications = new CreatePipelineRequestBodyNotifications() {{
                                    completed = "repellendus";
                                    error = "porro";
                                    progressing = "doloribus";
                                    warning = "ut";
                                }};;
                                outputBucket = "facilis";
                                thumbnailConfig = new CreatePipelineRequestBodyThumbnailConfig() {{
                                    bucket = "cupiditate";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            access = new String[]{{
                                                add("laudantium"),
                                            }};
                                            grantee = "odio";
                                            granteeType = "occaecati";
                                        }}),
                                    }};
                                    storageClass = "voluptatibus";
                                }};;
                            }};) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "vero";
                xAmzCredential = "omnis";
                xAmzDate = "quis";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "voluptate";
            }};            

            CreatePipelineResponse res = sdk.sdk.createPipeline(req);

            if (res.createPipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPreset

<p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePresetRequest;
import org.openapis.openapi.models.operations.CreatePresetRequestBody;
import org.openapis.openapi.models.operations.CreatePresetRequestBodyAudio;
import org.openapis.openapi.models.operations.CreatePresetRequestBodyThumbnails;
import org.openapis.openapi.models.operations.CreatePresetRequestBodyVideo;
import org.openapis.openapi.models.operations.CreatePresetResponse;
import org.openapis.openapi.models.shared.AudioCodecOptions;
import org.openapis.openapi.models.shared.PresetWatermark;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePresetRequest req = new CreatePresetRequest(                new CreatePresetRequestBody("vero", "tenetur") {{
                                audio = new CreatePresetRequestBodyAudio() {{
                                    audioPackingMode = "dignissimos";
                                    bitRate = "hic";
                                    channels = "distinctio";
                                    codec = "quod";
                                    codecOptions = new AudioCodecOptions() {{
                                        bitDepth = "odio";
                                        bitOrder = "similique";
                                        profile = "facilis";
                                        signed = "vero";
                                    }};;
                                    sampleRate = "ducimus";
                                }};;
                                description = "dolore";
                                thumbnails = new CreatePresetRequestBodyThumbnails() {{
                                    aspectRatio = "quibusdam";
                                    format = "illum";
                                    interval = "sequi";
                                    maxHeight = "natus";
                                    maxWidth = "impedit";
                                    paddingPolicy = "aut";
                                    resolution = "voluptatibus";
                                    sizingPolicy = "exercitationem";
                                }};;
                                video = new CreatePresetRequestBodyVideo() {{
                                    aspectRatio = "nulla";
                                    bitRate = "fugit";
                                    codec = "porro";
                                    codecOptions = new java.util.HashMap<String, String>() {{
                                        put("doloribus", "iusto");
                                        put("eligendi", "ducimus");
                                        put("alias", "officia");
                                        put("tempora", "ipsam");
                                    }};
                                    displayAspectRatio = "ea";
                                    fixedGOP = "aspernatur";
                                    frameRate = "vel";
                                    keyframesMaxDist = "possimus";
                                    maxFrameRate = "magnam";
                                    maxHeight = "ratione";
                                    maxWidth = "ex";
                                    paddingPolicy = "laudantium";
                                    resolution = "dicta";
                                    sizingPolicy = "dolor";
                                    watermarks = new org.openapis.openapi.models.shared.PresetWatermark[]{{
                                        add(new PresetWatermark() {{
                                            horizontalAlign = "quasi";
                                            horizontalOffset = "ex";
                                            id = "d9f5fce6-c556-4146-83e2-50fb008c42e1";
                                            maxHeight = "non";
                                            maxWidth = "et";
                                            opacity = "dolorum";
                                            sizingPolicy = "laborum";
                                            target = "placeat";
                                            verticalAlign = "velit";
                                            verticalOffset = "eum";
                                        }}),
                                        add(new PresetWatermark() {{
                                            horizontalAlign = "autem";
                                            horizontalOffset = "nobis";
                                            id = "8dd6b144-2907-4474-b78a-7bd466d28c10";
                                            maxHeight = "id";
                                            maxWidth = "quidem";
                                            opacity = "neque";
                                            sizingPolicy = "quo";
                                            target = "illum";
                                            verticalAlign = "quo";
                                            verticalOffset = "fuga";
                                        }}),
                                        add(new PresetWatermark() {{
                                            horizontalAlign = "eius";
                                            horizontalOffset = "eos";
                                            id = "51904e52-3c7e-40bc-b178-e4796f2a70c6";
                                            maxHeight = "quas";
                                            maxWidth = "praesentium";
                                            opacity = "consequuntur";
                                            sizingPolicy = "deleniti";
                                            target = "fugit";
                                            verticalAlign = "fuga";
                                            verticalOffset = "mollitia";
                                        }}),
                                        add(new PresetWatermark() {{
                                            horizontalAlign = "incidunt";
                                            horizontalOffset = "atque";
                                            id = "2562f222-e981-47ee-97cb-e61e6b7b95bc";
                                            maxHeight = "sit";
                                            maxWidth = "culpa";
                                            opacity = "tempore";
                                            sizingPolicy = "adipisci";
                                            target = "cumque";
                                            verticalAlign = "consequuntur";
                                            verticalOffset = "consequatur";
                                        }}),
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "sapiente";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "esse";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "provident";
            }};            

            CreatePresetResponse res = sdk.sdk.createPreset(req);

            if (res.createPresetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePipeline

<p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePipelineRequest;
import org.openapis.openapi.models.operations.DeletePipelineResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePipelineRequest req = new DeletePipelineRequest("nulla") {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "esse";
                xAmzCredential = "quasi";
                xAmzDate = "a";
                xAmzSecurityToken = "error";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "pariatur";
            }};            

            DeletePipelineResponse res = sdk.sdk.deletePipeline(req);

            if (res.deletePipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePreset

<p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePresetRequest;
import org.openapis.openapi.models.operations.DeletePresetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePresetRequest req = new DeletePresetRequest("quia") {{
                xAmzAlgorithm = "eveniet";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "facere";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "similique";
            }};            

            DeletePresetResponse res = sdk.sdk.deletePreset(req);

            if (res.deletePresetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listJobsByPipeline

<p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListJobsByPipelineRequest;
import org.openapis.openapi.models.operations.ListJobsByPipelineResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListJobsByPipelineRequest req = new ListJobsByPipelineRequest("aliquid") {{
                ascending = "tenetur";
                pageToken = "quae";
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "vel";
                xAmzCredential = "in";
                xAmzDate = "eius";
                xAmzSecurityToken = "libero";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "soluta";
            }};            

            ListJobsByPipelineResponse res = sdk.sdk.listJobsByPipeline(req);

            if (res.listJobsByPipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listJobsByStatus

The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListJobsByStatusRequest;
import org.openapis.openapi.models.operations.ListJobsByStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListJobsByStatusRequest req = new ListJobsByStatusRequest("aliquam") {{
                ascending = "sapiente";
                pageToken = "dicta";
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "ullam";
                xAmzDate = "nisi";
                xAmzSecurityToken = "aut";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "qui";
            }};            

            ListJobsByStatusResponse res = sdk.sdk.listJobsByStatus(req);

            if (res.listJobsByStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPipelines

The ListPipelines operation gets a list of the pipelines associated with the current AWS account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPipelinesRequest;
import org.openapis.openapi.models.operations.ListPipelinesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPipelinesRequest req = new ListPipelinesRequest() {{
                ascending = "ex";
                pageToken = "deleniti";
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "architecto";
                xAmzDate = "omnis";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "at";
            }};            

            ListPipelinesResponse res = sdk.sdk.listPipelines(req);

            if (res.listPipelinesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPresets

The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPresetsRequest;
import org.openapis.openapi.models.operations.ListPresetsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPresetsRequest req = new ListPresetsRequest() {{
                ascending = "voluptate";
                pageToken = "ipsa";
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "consectetur";
                xAmzDate = "adipisci";
                xAmzSecurityToken = "iste";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "accusantium";
            }};            

            ListPresetsResponse res = sdk.sdk.listPresets(req);

            if (res.listPresetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## readJob

The ReadJob operation returns detailed information about a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReadJobRequest;
import org.openapis.openapi.models.operations.ReadJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReadJobRequest req = new ReadJobRequest("aut") {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "eum";
                xAmzCredential = "mollitia";
                xAmzDate = "ab";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "non";
                xAmzSignedHeaders = "voluptatem";
            }};            

            ReadJobResponse res = sdk.sdk.readJob(req);

            if (res.readJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## readPipeline

The ReadPipeline operation gets detailed information about a pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReadPipelineRequest;
import org.openapis.openapi.models.operations.ReadPipelineResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReadPipelineRequest req = new ReadPipelineRequest("occaecati") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "impedit";
                xAmzCredential = "explicabo";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "aut";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "dicta";
            }};            

            ReadPipelineResponse res = sdk.sdk.readPipeline(req);

            if (res.readPipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## readPreset

The ReadPreset operation gets detailed information about a preset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReadPresetRequest;
import org.openapis.openapi.models.operations.ReadPresetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ReadPresetRequest req = new ReadPresetRequest("natus") {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "voluptas";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quaerat";
            }};            

            ReadPresetResponse res = sdk.sdk.readPreset(req);

            if (res.readPresetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~testRole~~

<p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestRoleRequest;
import org.openapis.openapi.models.operations.TestRoleRequestBody;
import org.openapis.openapi.models.operations.TestRoleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestRoleRequest req = new TestRoleRequest(                new TestRoleRequestBody("repellendus", "officia", "maxime",                 new String[]{{
                                                add("officia"),
                                                add("asperiores"),
                                            }});) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "quae";
                xAmzCredential = "quaerat";
                xAmzDate = "porro";
                xAmzSecurityToken = "quod";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "ab";
            }};            

            TestRoleResponse res = sdk.sdk.testRole(req);

            if (res.testRoleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePipeline

<p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePipelineRequest;
import org.openapis.openapi.models.operations.UpdatePipelineRequestBody;
import org.openapis.openapi.models.operations.UpdatePipelineRequestBodyContentConfig;
import org.openapis.openapi.models.operations.UpdatePipelineRequestBodyNotifications;
import org.openapis.openapi.models.operations.UpdatePipelineRequestBodyThumbnailConfig;
import org.openapis.openapi.models.operations.UpdatePipelineResponse;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePipelineRequest req = new UpdatePipelineRequest("fuga",                 new UpdatePipelineRequestBody() {{
                                awsKmsKeyArn = "id";
                                contentConfig = new UpdatePipelineRequestBodyContentConfig() {{
                                    bucket = "suscipit";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            access = new String[]{{
                                                add("est"),
                                                add("recusandae"),
                                                add("totam"),
                                            }};
                                            grantee = "fugiat";
                                            granteeType = "vel";
                                        }}),
                                    }};
                                    storageClass = "ducimus";
                                }};;
                                inputBucket = "quos";
                                name = "Clara Senger";
                                notifications = new UpdatePipelineRequestBodyNotifications() {{
                                    completed = "commodi";
                                    error = "in";
                                    progressing = "corporis";
                                    warning = "reiciendis";
                                }};;
                                role = "assumenda";
                                thumbnailConfig = new UpdatePipelineRequestBodyThumbnailConfig() {{
                                    bucket = "nemo";
                                    permissions = new org.openapis.openapi.models.shared.Permission[]{{
                                        add(new Permission() {{
                                            access = new String[]{{
                                                add("aperiam"),
                                                add("cum"),
                                            }};
                                            grantee = "consectetur";
                                            granteeType = "in";
                                        }}),
                                        add(new Permission() {{
                                            access = new String[]{{
                                                add("earum"),
                                                add("facere"),
                                            }};
                                            grantee = "numquam";
                                            granteeType = "doloribus";
                                        }}),
                                        add(new Permission() {{
                                            access = new String[]{{
                                                add("reiciendis"),
                                                add("quidem"),
                                            }};
                                            grantee = "saepe";
                                            granteeType = "necessitatibus";
                                        }}),
                                        add(new Permission() {{
                                            access = new String[]{{
                                                add("sunt"),
                                                add("asperiores"),
                                            }};
                                            grantee = "adipisci";
                                            granteeType = "non";
                                        }}),
                                    }};
                                    storageClass = "amet";
                                }};;
                            }};) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "a";
                xAmzDate = "debitis";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "harum";
            }};            

            UpdatePipelineResponse res = sdk.sdk.updatePipeline(req);

            if (res.updatePipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePipelineNotifications

<p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePipelineNotificationsRequest;
import org.openapis.openapi.models.operations.UpdatePipelineNotificationsRequestBody;
import org.openapis.openapi.models.operations.UpdatePipelineNotificationsRequestBodyNotifications;
import org.openapis.openapi.models.operations.UpdatePipelineNotificationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePipelineNotificationsRequest req = new UpdatePipelineNotificationsRequest("ipsa",                 new UpdatePipelineNotificationsRequestBody(                new UpdatePipelineNotificationsRequestBodyNotifications() {{
                                                completed = "voluptates";
                                                error = "libero";
                                                progressing = "vitae";
                                                warning = "accusamus";
                                            }};);) {{
                xAmzAlgorithm = "similique";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "aspernatur";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "minima";
            }};            

            UpdatePipelineNotificationsResponse res = sdk.sdk.updatePipelineNotifications(req);

            if (res.updatePipelineNotificationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePipelineStatus

<p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePipelineStatusRequest;
import org.openapis.openapi.models.operations.UpdatePipelineStatusRequestBody;
import org.openapis.openapi.models.operations.UpdatePipelineStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePipelineStatusRequest req = new UpdatePipelineStatusRequest("dolorum",                 new UpdatePipelineStatusRequestBody("adipisci");) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "blanditiis";
                xAmzDate = "in";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "officiis";
            }};            

            UpdatePipelineStatusResponse res = sdk.sdk.updatePipelineStatus(req);

            if (res.updatePipelineStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
