# SDK

## Overview

<fullname>AWS Elastic Transcoder Service</fullname> <p>The AWS Elastic Transcoder Service.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/elastictranscoder/>
### Available Operations

* [CancelJob](#canceljob) - <p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>
* [CreateJob](#createjob) - <p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>
* [CreatePipeline](#createpipeline) - The CreatePipeline operation creates a pipeline with settings that you specify.
* [CreatePreset](#createpreset) - <p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>
* [DeletePipeline](#deletepipeline) - <p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>
* [DeletePreset](#deletepreset) - <p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>
* [ListJobsByPipeline](#listjobsbypipeline) - <p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>
* [ListJobsByStatus](#listjobsbystatus) - The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.
* [ListPipelines](#listpipelines) - The ListPipelines operation gets a list of the pipelines associated with the current AWS account.
* [ListPresets](#listpresets) - The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.
* [ReadJob](#readjob) - The ReadJob operation returns detailed information about a job.
* [ReadPipeline](#readpipeline) - The ReadPipeline operation gets detailed information about a pipeline.
* [ReadPreset](#readpreset) - The ReadPreset operation gets detailed information about a preset.
* [~~TestRole~~](#testrole) - <p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p> :warning: **Deprecated**
* [UpdatePipeline](#updatepipeline) - <p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>
* [UpdatePipelineNotifications](#updatepipelinenotifications) - <p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>
* [UpdatePipelineStatus](#updatepipelinestatus) - <p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>

## CancelJob

<p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CancelJob(ctx, operations.CancelJobRequest{
        ID: "ddf7cc78-ca1b-4a92-8fc8-16742cb73920",
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelJobResponse != nil {
        // handle response
    }
}
```

## CreateJob

<p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateJob(ctx, operations.CreateJobRequest{
        RequestBody: operations.CreateJobRequestBody{
            Input: &operations.CreateJobRequestBodyInput{
                AspectRatio: sdk.String("hic"),
                Container: sdk.String("saepe"),
                DetectedProperties: &shared.DetectedProperties{
                    DurationMillis: sdk.Int64(681820),
                    FileSize: sdk.Int64(449950),
                    FrameRate: sdk.String("corporis"),
                    Height: sdk.Int64(613064),
                    Width: sdk.Int64(437032),
                },
                Encryption: &shared.Encryption{
                    InitializationVector: sdk.String("saepe"),
                    Key: sdk.String("quidem"),
                    KeyMd5: sdk.String("architecto"),
                    Mode: sdk.String("ipsa"),
                },
                FrameRate: sdk.String("reiciendis"),
                InputCaptions: &shared.InputCaptions{
                    CaptionSources: []shared.CaptionSource{
                        shared.CaptionSource{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("mollitia"),
                                Key: sdk.String("laborum"),
                                KeyMd5: sdk.String("dolores"),
                                Mode: sdk.String("dolorem"),
                            },
                            Key: sdk.String("corporis"),
                            Label: sdk.String("explicabo"),
                            Language: sdk.String("nobis"),
                            TimeOffset: sdk.String("enim"),
                        },
                        shared.CaptionSource{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("omnis"),
                                Key: sdk.String("nemo"),
                                KeyMd5: sdk.String("minima"),
                                Mode: sdk.String("excepturi"),
                            },
                            Key: sdk.String("accusantium"),
                            Label: sdk.String("iure"),
                            Language: sdk.String("culpa"),
                            TimeOffset: sdk.String("doloribus"),
                        },
                        shared.CaptionSource{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("sapiente"),
                                Key: sdk.String("architecto"),
                                KeyMd5: sdk.String("mollitia"),
                                Mode: sdk.String("dolorem"),
                            },
                            Key: sdk.String("culpa"),
                            Label: sdk.String("consequuntur"),
                            Language: sdk.String("repellat"),
                            TimeOffset: sdk.String("mollitia"),
                        },
                    },
                    MergePolicy: sdk.String("occaecati"),
                },
                Interlaced: sdk.String("numquam"),
                Key: sdk.String("commodi"),
                Resolution: sdk.String("quam"),
                TimeSpan: &shared.TimeSpan{
                    Duration: sdk.String("molestiae"),
                    StartTime: sdk.String("velit"),
                },
            },
            Inputs: []shared.JobInput{
                shared.JobInput{
                    AspectRatio: sdk.String("quia"),
                    Container: sdk.String("quis"),
                    DetectedProperties: &shared.DetectedProperties{
                        DurationMillis: sdk.Int64(110375),
                        FileSize: sdk.Int64(674752),
                        FrameRate: sdk.String("animi"),
                        Height: sdk.Int64(317202),
                        Width: sdk.Int64(138183),
                    },
                    Encryption: &shared.Encryption{
                        InitializationVector: sdk.String("quo"),
                        Key: sdk.String("sequi"),
                        KeyMd5: sdk.String("tenetur"),
                        Mode: sdk.String("ipsam"),
                    },
                    FrameRate: sdk.String("id"),
                    InputCaptions: &shared.InputCaptions{
                        CaptionSources: []shared.CaptionSource{
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("aut"),
                                    Key: sdk.String("quasi"),
                                    KeyMd5: sdk.String("error"),
                                    Mode: sdk.String("temporibus"),
                                },
                                Key: sdk.String("laborum"),
                                Label: sdk.String("quasi"),
                                Language: sdk.String("reiciendis"),
                                TimeOffset: sdk.String("voluptatibus"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("vero"),
                                    Key: sdk.String("nihil"),
                                    KeyMd5: sdk.String("praesentium"),
                                    Mode: sdk.String("voluptatibus"),
                                },
                                Key: sdk.String("ipsa"),
                                Label: sdk.String("omnis"),
                                Language: sdk.String("voluptate"),
                                TimeOffset: sdk.String("cum"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("perferendis"),
                                    Key: sdk.String("doloremque"),
                                    KeyMd5: sdk.String("reprehenderit"),
                                    Mode: sdk.String("ut"),
                                },
                                Key: sdk.String("maiores"),
                                Label: sdk.String("dicta"),
                                Language: sdk.String("corporis"),
                                TimeOffset: sdk.String("dolore"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("iusto"),
                                    Key: sdk.String("dicta"),
                                    KeyMd5: sdk.String("harum"),
                                    Mode: sdk.String("enim"),
                                },
                                Key: sdk.String("accusamus"),
                                Label: sdk.String("commodi"),
                                Language: sdk.String("repudiandae"),
                                TimeOffset: sdk.String("quae"),
                            },
                        },
                        MergePolicy: sdk.String("ipsum"),
                    },
                    Interlaced: sdk.String("quidem"),
                    Key: sdk.String("molestias"),
                    Resolution: sdk.String("excepturi"),
                    TimeSpan: &shared.TimeSpan{
                        Duration: sdk.String("pariatur"),
                        StartTime: sdk.String("modi"),
                    },
                },
                shared.JobInput{
                    AspectRatio: sdk.String("praesentium"),
                    Container: sdk.String("rem"),
                    DetectedProperties: &shared.DetectedProperties{
                        DurationMillis: sdk.Int64(916723),
                        FileSize: sdk.Int64(93940),
                        FrameRate: sdk.String("repudiandae"),
                        Height: sdk.Int64(575947),
                        Width: sdk.Int64(83112),
                    },
                    Encryption: &shared.Encryption{
                        InitializationVector: sdk.String("itaque"),
                        Key: sdk.String("incidunt"),
                        KeyMd5: sdk.String("enim"),
                        Mode: sdk.String("consequatur"),
                    },
                    FrameRate: sdk.String("est"),
                    InputCaptions: &shared.InputCaptions{
                        CaptionSources: []shared.CaptionSource{
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("explicabo"),
                                    Key: sdk.String("deserunt"),
                                    KeyMd5: sdk.String("distinctio"),
                                    Mode: sdk.String("quibusdam"),
                                },
                                Key: sdk.String("labore"),
                                Label: sdk.String("modi"),
                                Language: sdk.String("qui"),
                                TimeOffset: sdk.String("aliquid"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("cupiditate"),
                                    Key: sdk.String("quos"),
                                    KeyMd5: sdk.String("perferendis"),
                                    Mode: sdk.String("magni"),
                                },
                                Key: sdk.String("assumenda"),
                                Label: sdk.String("ipsam"),
                                Language: sdk.String("alias"),
                                TimeOffset: sdk.String("fugit"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("dolorum"),
                                    Key: sdk.String("excepturi"),
                                    KeyMd5: sdk.String("tempora"),
                                    Mode: sdk.String("facilis"),
                                },
                                Key: sdk.String("tempore"),
                                Label: sdk.String("labore"),
                                Language: sdk.String("delectus"),
                                TimeOffset: sdk.String("eum"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("non"),
                                    Key: sdk.String("eligendi"),
                                    KeyMd5: sdk.String("sint"),
                                    Mode: sdk.String("aliquid"),
                                },
                                Key: sdk.String("provident"),
                                Label: sdk.String("necessitatibus"),
                                Language: sdk.String("sint"),
                                TimeOffset: sdk.String("officia"),
                            },
                        },
                        MergePolicy: sdk.String("dolor"),
                    },
                    Interlaced: sdk.String("debitis"),
                    Key: sdk.String("a"),
                    Resolution: sdk.String("dolorum"),
                    TimeSpan: &shared.TimeSpan{
                        Duration: sdk.String("in"),
                        StartTime: sdk.String("in"),
                    },
                },
                shared.JobInput{
                    AspectRatio: sdk.String("illum"),
                    Container: sdk.String("maiores"),
                    DetectedProperties: &shared.DetectedProperties{
                        DurationMillis: sdk.Int64(699479),
                        FileSize: sdk.Int64(116202),
                        FrameRate: sdk.String("magnam"),
                        Height: sdk.Int64(767024),
                        Width: sdk.Int64(813798),
                    },
                    Encryption: &shared.Encryption{
                        InitializationVector: sdk.String("ea"),
                        Key: sdk.String("aliquid"),
                        KeyMd5: sdk.String("laborum"),
                        Mode: sdk.String("accusamus"),
                    },
                    FrameRate: sdk.String("non"),
                    InputCaptions: &shared.InputCaptions{
                        CaptionSources: []shared.CaptionSource{
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("enim"),
                                    Key: sdk.String("accusamus"),
                                    KeyMd5: sdk.String("delectus"),
                                    Mode: sdk.String("quidem"),
                                },
                                Key: sdk.String("provident"),
                                Label: sdk.String("nam"),
                                Language: sdk.String("id"),
                                TimeOffset: sdk.String("blanditiis"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("deleniti"),
                                    Key: sdk.String("sapiente"),
                                    KeyMd5: sdk.String("amet"),
                                    Mode: sdk.String("deserunt"),
                                },
                                Key: sdk.String("nisi"),
                                Label: sdk.String("vel"),
                                Language: sdk.String("natus"),
                                TimeOffset: sdk.String("omnis"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("molestiae"),
                                    Key: sdk.String("perferendis"),
                                    KeyMd5: sdk.String("nihil"),
                                    Mode: sdk.String("magnam"),
                                },
                                Key: sdk.String("distinctio"),
                                Label: sdk.String("id"),
                                Language: sdk.String("labore"),
                                TimeOffset: sdk.String("labore"),
                            },
                        },
                        MergePolicy: sdk.String("suscipit"),
                    },
                    Interlaced: sdk.String("natus"),
                    Key: sdk.String("nobis"),
                    Resolution: sdk.String("eum"),
                    TimeSpan: &shared.TimeSpan{
                        Duration: sdk.String("vero"),
                        StartTime: sdk.String("aspernatur"),
                    },
                },
            },
            Output: &operations.CreateJobRequestBodyOutput{
                AlbumArt: &shared.JobAlbumArt{
                    Artwork: []shared.Artwork{
                        shared.Artwork{
                            AlbumArtFormat: sdk.String("magnam"),
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("et"),
                                Key: sdk.String("excepturi"),
                                KeyMd5: sdk.String("ullam"),
                                Mode: sdk.String("provident"),
                            },
                            InputKey: sdk.String("quos"),
                            MaxHeight: sdk.String("sint"),
                            MaxWidth: sdk.String("accusantium"),
                            PaddingPolicy: sdk.String("mollitia"),
                            SizingPolicy: sdk.String("reiciendis"),
                        },
                    },
                    MergePolicy: sdk.String("mollitia"),
                },
                Captions: &shared.Captions{
                    CaptionFormats: []shared.CaptionFormat{
                        shared.CaptionFormat{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("eum"),
                                Key: sdk.String("dolor"),
                                KeyMd5: sdk.String("necessitatibus"),
                                Mode: sdk.String("odit"),
                            },
                            Format: sdk.String("nemo"),
                            Pattern: sdk.String("quasi"),
                        },
                        shared.CaptionFormat{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("iure"),
                                Key: sdk.String("doloribus"),
                                KeyMd5: sdk.String("debitis"),
                                Mode: sdk.String("eius"),
                            },
                            Format: sdk.String("maxime"),
                            Pattern: sdk.String("deleniti"),
                        },
                    },
                    CaptionSources: []shared.CaptionSource{
                        shared.CaptionSource{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("in"),
                                Key: sdk.String("architecto"),
                                KeyMd5: sdk.String("architecto"),
                                Mode: sdk.String("repudiandae"),
                            },
                            Key: sdk.String("ullam"),
                            Label: sdk.String("expedita"),
                            Language: sdk.String("nihil"),
                            TimeOffset: sdk.String("repellat"),
                        },
                        shared.CaptionSource{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("quibusdam"),
                                Key: sdk.String("sed"),
                                KeyMd5: sdk.String("saepe"),
                                Mode: sdk.String("pariatur"),
                            },
                            Key: sdk.String("accusantium"),
                            Label: sdk.String("consequuntur"),
                            Language: sdk.String("praesentium"),
                            TimeOffset: sdk.String("natus"),
                        },
                        shared.CaptionSource{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("magni"),
                                Key: sdk.String("sunt"),
                                KeyMd5: sdk.String("quo"),
                                Mode: sdk.String("illum"),
                            },
                            Key: sdk.String("pariatur"),
                            Label: sdk.String("maxime"),
                            Language: sdk.String("ea"),
                            TimeOffset: sdk.String("excepturi"),
                        },
                    },
                    MergePolicy: sdk.String("odit"),
                },
                Composition: []shared.Clip{
                    shared.Clip{
                        TimeSpan: &shared.TimeSpan{
                            Duration: sdk.String("accusantium"),
                            StartTime: sdk.String("ab"),
                        },
                    },
                    shared.Clip{
                        TimeSpan: &shared.TimeSpan{
                            Duration: sdk.String("maiores"),
                            StartTime: sdk.String("quidem"),
                        },
                    },
                },
                Encryption: &shared.Encryption{
                    InitializationVector: sdk.String("ipsam"),
                    Key: sdk.String("voluptate"),
                    KeyMd5: sdk.String("autem"),
                    Mode: sdk.String("nam"),
                },
                Key: sdk.String("eaque"),
                PresetID: sdk.String("pariatur"),
                Rotate: sdk.String("nemo"),
                SegmentDuration: sdk.String("voluptatibus"),
                ThumbnailEncryption: &shared.Encryption{
                    InitializationVector: sdk.String("perferendis"),
                    Key: sdk.String("fugiat"),
                    KeyMd5: sdk.String("amet"),
                    Mode: sdk.String("aut"),
                },
                ThumbnailPattern: sdk.String("cumque"),
                Watermarks: []shared.JobWatermark{
                    shared.JobWatermark{
                        Encryption: &shared.Encryption{
                            InitializationVector: sdk.String("hic"),
                            Key: sdk.String("libero"),
                            KeyMd5: sdk.String("nobis"),
                            Mode: sdk.String("dolores"),
                        },
                        InputKey: sdk.String("quis"),
                        PresetWatermarkID: sdk.String("totam"),
                    },
                    shared.JobWatermark{
                        Encryption: &shared.Encryption{
                            InitializationVector: sdk.String("dignissimos"),
                            Key: sdk.String("eaque"),
                            KeyMd5: sdk.String("quis"),
                            Mode: sdk.String("nesciunt"),
                        },
                        InputKey: sdk.String("eos"),
                        PresetWatermarkID: sdk.String("perferendis"),
                    },
                },
            },
            OutputKeyPrefix: sdk.String("dolores"),
            Outputs: []shared.CreateJobOutput{
                shared.CreateJobOutput{
                    AlbumArt: &shared.JobAlbumArt{
                        Artwork: []shared.Artwork{
                            shared.Artwork{
                                AlbumArtFormat: sdk.String("dolor"),
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("vero"),
                                    Key: sdk.String("nostrum"),
                                    KeyMd5: sdk.String("hic"),
                                    Mode: sdk.String("recusandae"),
                                },
                                InputKey: sdk.String("omnis"),
                                MaxHeight: sdk.String("facilis"),
                                MaxWidth: sdk.String("perspiciatis"),
                                PaddingPolicy: sdk.String("voluptatem"),
                                SizingPolicy: sdk.String("porro"),
                            },
                            shared.Artwork{
                                AlbumArtFormat: sdk.String("consequuntur"),
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("blanditiis"),
                                    Key: sdk.String("error"),
                                    KeyMd5: sdk.String("eaque"),
                                    Mode: sdk.String("occaecati"),
                                },
                                InputKey: sdk.String("rerum"),
                                MaxHeight: sdk.String("adipisci"),
                                MaxWidth: sdk.String("asperiores"),
                                PaddingPolicy: sdk.String("earum"),
                                SizingPolicy: sdk.String("modi"),
                            },
                        },
                        MergePolicy: sdk.String("iste"),
                    },
                    Captions: &shared.Captions{
                        CaptionFormats: []shared.CaptionFormat{
                            shared.CaptionFormat{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("deleniti"),
                                    Key: sdk.String("pariatur"),
                                    KeyMd5: sdk.String("provident"),
                                    Mode: sdk.String("nobis"),
                                },
                                Format: sdk.String("libero"),
                                Pattern: sdk.String("delectus"),
                            },
                            shared.CaptionFormat{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("quaerat"),
                                    Key: sdk.String("quos"),
                                    KeyMd5: sdk.String("aliquid"),
                                    Mode: sdk.String("dolorem"),
                                },
                                Format: sdk.String("dolorem"),
                                Pattern: sdk.String("dolor"),
                            },
                            shared.CaptionFormat{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("qui"),
                                    Key: sdk.String("ipsum"),
                                    KeyMd5: sdk.String("hic"),
                                    Mode: sdk.String("excepturi"),
                                },
                                Format: sdk.String("cum"),
                                Pattern: sdk.String("voluptate"),
                            },
                        },
                        CaptionSources: []shared.CaptionSource{
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("reiciendis"),
                                    Key: sdk.String("amet"),
                                    KeyMd5: sdk.String("dolorum"),
                                    Mode: sdk.String("numquam"),
                                },
                                Key: sdk.String("veritatis"),
                                Label: sdk.String("ipsa"),
                                Language: sdk.String("ipsa"),
                                TimeOffset: sdk.String("iure"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("odio"),
                                    Key: sdk.String("quaerat"),
                                    KeyMd5: sdk.String("accusamus"),
                                    Mode: sdk.String("quidem"),
                                },
                                Key: sdk.String("voluptatibus"),
                                Label: sdk.String("voluptas"),
                                Language: sdk.String("natus"),
                                TimeOffset: sdk.String("eos"),
                            },
                        },
                        MergePolicy: sdk.String("atque"),
                    },
                    Composition: []shared.Clip{
                        shared.Clip{
                            TimeSpan: &shared.TimeSpan{
                                Duration: sdk.String("fugiat"),
                                StartTime: sdk.String("ab"),
                            },
                        },
                    },
                    Encryption: &shared.Encryption{
                        InitializationVector: sdk.String("soluta"),
                        Key: sdk.String("dolorum"),
                        KeyMd5: sdk.String("iusto"),
                        Mode: sdk.String("voluptate"),
                    },
                    Key: sdk.String("dolorum"),
                    PresetID: sdk.String("deleniti"),
                    Rotate: sdk.String("omnis"),
                    SegmentDuration: sdk.String("necessitatibus"),
                    ThumbnailEncryption: &shared.Encryption{
                        InitializationVector: sdk.String("distinctio"),
                        Key: sdk.String("asperiores"),
                        KeyMd5: sdk.String("nihil"),
                        Mode: sdk.String("ipsum"),
                    },
                    ThumbnailPattern: sdk.String("voluptate"),
                    Watermarks: []shared.JobWatermark{
                        shared.JobWatermark{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("saepe"),
                                Key: sdk.String("eius"),
                                KeyMd5: sdk.String("aspernatur"),
                                Mode: sdk.String("perferendis"),
                            },
                            InputKey: sdk.String("amet"),
                            PresetWatermarkID: sdk.String("optio"),
                        },
                        shared.JobWatermark{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("accusamus"),
                                Key: sdk.String("ad"),
                                KeyMd5: sdk.String("saepe"),
                                Mode: sdk.String("suscipit"),
                            },
                            InputKey: sdk.String("deserunt"),
                            PresetWatermarkID: sdk.String("provident"),
                        },
                        shared.JobWatermark{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("minima"),
                                Key: sdk.String("repellendus"),
                                KeyMd5: sdk.String("totam"),
                                Mode: sdk.String("similique"),
                            },
                            InputKey: sdk.String("alias"),
                            PresetWatermarkID: sdk.String("at"),
                        },
                    },
                },
                shared.CreateJobOutput{
                    AlbumArt: &shared.JobAlbumArt{
                        Artwork: []shared.Artwork{
                            shared.Artwork{
                                AlbumArtFormat: sdk.String("tempora"),
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("vel"),
                                    Key: sdk.String("quod"),
                                    KeyMd5: sdk.String("officiis"),
                                    Mode: sdk.String("qui"),
                                },
                                InputKey: sdk.String("dolorum"),
                                MaxHeight: sdk.String("a"),
                                MaxWidth: sdk.String("esse"),
                                PaddingPolicy: sdk.String("harum"),
                                SizingPolicy: sdk.String("iusto"),
                            },
                            shared.Artwork{
                                AlbumArtFormat: sdk.String("ipsum"),
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("quisquam"),
                                    Key: sdk.String("tenetur"),
                                    KeyMd5: sdk.String("amet"),
                                    Mode: sdk.String("tempore"),
                                },
                                InputKey: sdk.String("accusamus"),
                                MaxHeight: sdk.String("numquam"),
                                MaxWidth: sdk.String("enim"),
                                PaddingPolicy: sdk.String("dolorem"),
                                SizingPolicy: sdk.String("sapiente"),
                            },
                        },
                        MergePolicy: sdk.String("totam"),
                    },
                    Captions: &shared.Captions{
                        CaptionFormats: []shared.CaptionFormat{
                            shared.CaptionFormat{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("sit"),
                                    Key: sdk.String("expedita"),
                                    KeyMd5: sdk.String("neque"),
                                    Mode: sdk.String("sed"),
                                },
                                Format: sdk.String("vel"),
                                Pattern: sdk.String("libero"),
                            },
                            shared.CaptionFormat{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("voluptas"),
                                    Key: sdk.String("deserunt"),
                                    KeyMd5: sdk.String("quam"),
                                    Mode: sdk.String("ipsum"),
                                },
                                Format: sdk.String("incidunt"),
                                Pattern: sdk.String("qui"),
                            },
                        },
                        CaptionSources: []shared.CaptionSource{
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("maxime"),
                                    Key: sdk.String("pariatur"),
                                    KeyMd5: sdk.String("soluta"),
                                    Mode: sdk.String("dicta"),
                                },
                                Key: sdk.String("laborum"),
                                Label: sdk.String("totam"),
                                Language: sdk.String("incidunt"),
                                TimeOffset: sdk.String("aspernatur"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("dolores"),
                                    Key: sdk.String("distinctio"),
                                    KeyMd5: sdk.String("facilis"),
                                    Mode: sdk.String("aliquid"),
                                },
                                Key: sdk.String("quam"),
                                Label: sdk.String("molestias"),
                                Language: sdk.String("temporibus"),
                                TimeOffset: sdk.String("qui"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("neque"),
                                    Key: sdk.String("fugit"),
                                    KeyMd5: sdk.String("magni"),
                                    Mode: sdk.String("odio"),
                                },
                                Key: sdk.String("sunt"),
                                Label: sdk.String("ullam"),
                                Language: sdk.String("nam"),
                                TimeOffset: sdk.String("hic"),
                            },
                        },
                        MergePolicy: sdk.String("voluptatem"),
                    },
                    Composition: []shared.Clip{
                        shared.Clip{
                            TimeSpan: &shared.TimeSpan{
                                Duration: sdk.String("soluta"),
                                StartTime: sdk.String("nobis"),
                            },
                        },
                        shared.Clip{
                            TimeSpan: &shared.TimeSpan{
                                Duration: sdk.String("et"),
                                StartTime: sdk.String("saepe"),
                            },
                        },
                        shared.Clip{
                            TimeSpan: &shared.TimeSpan{
                                Duration: sdk.String("ipsum"),
                                StartTime: sdk.String("veritatis"),
                            },
                        },
                        shared.Clip{
                            TimeSpan: &shared.TimeSpan{
                                Duration: sdk.String("nobis"),
                                StartTime: sdk.String("quos"),
                            },
                        },
                    },
                    Encryption: &shared.Encryption{
                        InitializationVector: sdk.String("tempore"),
                        Key: sdk.String("cupiditate"),
                        KeyMd5: sdk.String("aperiam"),
                        Mode: sdk.String("delectus"),
                    },
                    Key: sdk.String("dolorem"),
                    PresetID: sdk.String("dolore"),
                    Rotate: sdk.String("labore"),
                    SegmentDuration: sdk.String("adipisci"),
                    ThumbnailEncryption: &shared.Encryption{
                        InitializationVector: sdk.String("dolorum"),
                        Key: sdk.String("architecto"),
                        KeyMd5: sdk.String("quae"),
                        Mode: sdk.String("aut"),
                    },
                    ThumbnailPattern: sdk.String("quas"),
                    Watermarks: []shared.JobWatermark{
                        shared.JobWatermark{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("consequatur"),
                                Key: sdk.String("est"),
                                KeyMd5: sdk.String("repellendus"),
                                Mode: sdk.String("porro"),
                            },
                            InputKey: sdk.String("doloribus"),
                            PresetWatermarkID: sdk.String("ut"),
                        },
                        shared.JobWatermark{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("facilis"),
                                Key: sdk.String("cupiditate"),
                                KeyMd5: sdk.String("qui"),
                                Mode: sdk.String("quae"),
                            },
                            InputKey: sdk.String("laudantium"),
                            PresetWatermarkID: sdk.String("odio"),
                        },
                        shared.JobWatermark{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("occaecati"),
                                Key: sdk.String("voluptatibus"),
                                KeyMd5: sdk.String("quisquam"),
                                Mode: sdk.String("vero"),
                            },
                            InputKey: sdk.String("omnis"),
                            PresetWatermarkID: sdk.String("quis"),
                        },
                        shared.JobWatermark{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("ipsum"),
                                Key: sdk.String("delectus"),
                                KeyMd5: sdk.String("voluptate"),
                                Mode: sdk.String("consectetur"),
                            },
                            InputKey: sdk.String("vero"),
                            PresetWatermarkID: sdk.String("tenetur"),
                        },
                    },
                },
                shared.CreateJobOutput{
                    AlbumArt: &shared.JobAlbumArt{
                        Artwork: []shared.Artwork{
                            shared.Artwork{
                                AlbumArtFormat: sdk.String("hic"),
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("distinctio"),
                                    Key: sdk.String("quod"),
                                    KeyMd5: sdk.String("odio"),
                                    Mode: sdk.String("similique"),
                                },
                                InputKey: sdk.String("facilis"),
                                MaxHeight: sdk.String("vero"),
                                MaxWidth: sdk.String("ducimus"),
                                PaddingPolicy: sdk.String("dolore"),
                                SizingPolicy: sdk.String("quibusdam"),
                            },
                            shared.Artwork{
                                AlbumArtFormat: sdk.String("illum"),
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("sequi"),
                                    Key: sdk.String("natus"),
                                    KeyMd5: sdk.String("impedit"),
                                    Mode: sdk.String("aut"),
                                },
                                InputKey: sdk.String("voluptatibus"),
                                MaxHeight: sdk.String("exercitationem"),
                                MaxWidth: sdk.String("nulla"),
                                PaddingPolicy: sdk.String("fugit"),
                                SizingPolicy: sdk.String("porro"),
                            },
                        },
                        MergePolicy: sdk.String("maiores"),
                    },
                    Captions: &shared.Captions{
                        CaptionFormats: []shared.CaptionFormat{
                            shared.CaptionFormat{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("iusto"),
                                    Key: sdk.String("eligendi"),
                                    KeyMd5: sdk.String("ducimus"),
                                    Mode: sdk.String("alias"),
                                },
                                Format: sdk.String("officia"),
                                Pattern: sdk.String("tempora"),
                            },
                            shared.CaptionFormat{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("ipsam"),
                                    Key: sdk.String("ea"),
                                    KeyMd5: sdk.String("aspernatur"),
                                    Mode: sdk.String("vel"),
                                },
                                Format: sdk.String("possimus"),
                                Pattern: sdk.String("magnam"),
                            },
                            shared.CaptionFormat{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("ratione"),
                                    Key: sdk.String("ex"),
                                    KeyMd5: sdk.String("laudantium"),
                                    Mode: sdk.String("dicta"),
                                },
                                Format: sdk.String("dolor"),
                                Pattern: sdk.String("maiores"),
                            },
                            shared.CaptionFormat{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("quasi"),
                                    Key: sdk.String("ex"),
                                    KeyMd5: sdk.String("nulla"),
                                    Mode: sdk.String("excepturi"),
                                },
                                Format: sdk.String("voluptatibus"),
                                Pattern: sdk.String("nostrum"),
                            },
                        },
                        CaptionSources: []shared.CaptionSource{
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("quisquam"),
                                    Key: sdk.String("saepe"),
                                    KeyMd5: sdk.String("ea"),
                                    Mode: sdk.String("impedit"),
                                },
                                Key: sdk.String("corporis"),
                                Label: sdk.String("veniam"),
                                Language: sdk.String("aliquid"),
                                TimeOffset: sdk.String("inventore"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("magnam"),
                                    Key: sdk.String("ea"),
                                    KeyMd5: sdk.String("quo"),
                                    Mode: sdk.String("consectetur"),
                                },
                                Key: sdk.String("recusandae"),
                                Label: sdk.String("aspernatur"),
                                Language: sdk.String("minima"),
                                TimeOffset: sdk.String("eaque"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("a"),
                                    Key: sdk.String("libero"),
                                    KeyMd5: sdk.String("aut"),
                                    Mode: sdk.String("aut"),
                                },
                                Key: sdk.String("deleniti"),
                                Label: sdk.String("impedit"),
                                Language: sdk.String("aliquam"),
                                TimeOffset: sdk.String("fugit"),
                            },
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("accusamus"),
                                    Key: sdk.String("inventore"),
                                    KeyMd5: sdk.String("non"),
                                    Mode: sdk.String("et"),
                                },
                                Key: sdk.String("dolorum"),
                                Label: sdk.String("laborum"),
                                Language: sdk.String("placeat"),
                                TimeOffset: sdk.String("velit"),
                            },
                        },
                        MergePolicy: sdk.String("eum"),
                    },
                    Composition: []shared.Clip{
                        shared.Clip{
                            TimeSpan: &shared.TimeSpan{
                                Duration: sdk.String("nobis"),
                                StartTime: sdk.String("quas"),
                            },
                        },
                        shared.Clip{
                            TimeSpan: &shared.TimeSpan{
                                Duration: sdk.String("assumenda"),
                                StartTime: sdk.String("nulla"),
                            },
                        },
                    },
                    Encryption: &shared.Encryption{
                        InitializationVector: sdk.String("voluptas"),
                        Key: sdk.String("libero"),
                        KeyMd5: sdk.String("quasi"),
                        Mode: sdk.String("tempora"),
                    },
                    Key: sdk.String("numquam"),
                    PresetID: sdk.String("explicabo"),
                    Rotate: sdk.String("provident"),
                    SegmentDuration: sdk.String("ipsa"),
                    ThumbnailEncryption: &shared.Encryption{
                        InitializationVector: sdk.String("molestiae"),
                        Key: sdk.String("magnam"),
                        KeyMd5: sdk.String("odio"),
                        Mode: sdk.String("eius"),
                    },
                    ThumbnailPattern: sdk.String("esse"),
                    Watermarks: []shared.JobWatermark{
                        shared.JobWatermark{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("rem"),
                                Key: sdk.String("fuga"),
                                KeyMd5: sdk.String("reprehenderit"),
                                Mode: sdk.String("quidem"),
                            },
                            InputKey: sdk.String("fugiat"),
                            PresetWatermarkID: sdk.String("ut"),
                        },
                        shared.JobWatermark{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("eum"),
                                Key: sdk.String("suscipit"),
                                KeyMd5: sdk.String("assumenda"),
                                Mode: sdk.String("eos"),
                            },
                            InputKey: sdk.String("praesentium"),
                            PresetWatermarkID: sdk.String("quisquam"),
                        },
                    },
                },
                shared.CreateJobOutput{
                    AlbumArt: &shared.JobAlbumArt{
                        Artwork: []shared.Artwork{
                            shared.Artwork{
                                AlbumArtFormat: sdk.String("ipsa"),
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("id"),
                                    Key: sdk.String("quidem"),
                                    KeyMd5: sdk.String("neque"),
                                    Mode: sdk.String("quo"),
                                },
                                InputKey: sdk.String("illum"),
                                MaxHeight: sdk.String("quo"),
                                MaxWidth: sdk.String("fuga"),
                                PaddingPolicy: sdk.String("eius"),
                                SizingPolicy: sdk.String("eos"),
                            },
                        },
                        MergePolicy: sdk.String("voluptas"),
                    },
                    Captions: &shared.Captions{
                        CaptionFormats: []shared.CaptionFormat{
                            shared.CaptionFormat{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("cupiditate"),
                                    Key: sdk.String("consequatur"),
                                    KeyMd5: sdk.String("tempora"),
                                    Mode: sdk.String("debitis"),
                                },
                                Format: sdk.String("ipsam"),
                                Pattern: sdk.String("aspernatur"),
                            },
                        },
                        CaptionSources: []shared.CaptionSource{
                            shared.CaptionSource{
                                Encryption: &shared.Encryption{
                                    InitializationVector: sdk.String("quo"),
                                    Key: sdk.String("esse"),
                                    KeyMd5: sdk.String("recusandae"),
                                    Mode: sdk.String("aperiam"),
                                },
                                Key: sdk.String("distinctio"),
                                Label: sdk.String("quod"),
                                Language: sdk.String("dignissimos"),
                                TimeOffset: sdk.String("inventore"),
                            },
                        },
                        MergePolicy: sdk.String("nihil"),
                    },
                    Composition: []shared.Clip{
                        shared.Clip{
                            TimeSpan: &shared.TimeSpan{
                                Duration: sdk.String("accusamus"),
                                StartTime: sdk.String("aliquam"),
                            },
                        },
                        shared.Clip{
                            TimeSpan: &shared.TimeSpan{
                                Duration: sdk.String("odio"),
                                StartTime: sdk.String("occaecati"),
                            },
                        },
                        shared.Clip{
                            TimeSpan: &shared.TimeSpan{
                                Duration: sdk.String("commodi"),
                                StartTime: sdk.String("sapiente"),
                            },
                        },
                    },
                    Encryption: &shared.Encryption{
                        InitializationVector: sdk.String("dolores"),
                        Key: sdk.String("deserunt"),
                        KeyMd5: sdk.String("molestiae"),
                        Mode: sdk.String("accusantium"),
                    },
                    Key: sdk.String("porro"),
                    PresetID: sdk.String("eum"),
                    Rotate: sdk.String("quas"),
                    SegmentDuration: sdk.String("praesentium"),
                    ThumbnailEncryption: &shared.Encryption{
                        InitializationVector: sdk.String("consequuntur"),
                        Key: sdk.String("deleniti"),
                        KeyMd5: sdk.String("fugit"),
                        Mode: sdk.String("fuga"),
                    },
                    ThumbnailPattern: sdk.String("mollitia"),
                    Watermarks: []shared.JobWatermark{
                        shared.JobWatermark{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("atque"),
                                Key: sdk.String("explicabo"),
                                KeyMd5: sdk.String("minima"),
                                Mode: sdk.String("nisi"),
                            },
                            InputKey: sdk.String("fugit"),
                            PresetWatermarkID: sdk.String("sapiente"),
                        },
                        shared.JobWatermark{
                            Encryption: &shared.Encryption{
                                InitializationVector: sdk.String("consequuntur"),
                                Key: sdk.String("ratione"),
                                KeyMd5: sdk.String("explicabo"),
                                Mode: sdk.String("saepe"),
                            },
                            InputKey: sdk.String("occaecati"),
                            PresetWatermarkID: sdk.String("atque"),
                        },
                    },
                },
            },
            PipelineID: "et",
            Playlists: []shared.CreateJobPlaylist{
                shared.CreateJobPlaylist{
                    Format: sdk.String("eveniet"),
                    HlsContentProtection: &shared.HlsContentProtection{
                        InitializationVector: sdk.String("accusamus"),
                        Key: sdk.String("veritatis"),
                        KeyMd5: sdk.String("esse"),
                        KeyStoragePolicy: sdk.String("quod"),
                        LicenseAcquisitionURL: sdk.String("nam"),
                        Method: sdk.String("vero"),
                    },
                    Name: sdk.String("Frances Turner"),
                    OutputKeys: []string{
                        "rerum",
                        "occaecati",
                    },
                    PlayReadyDrm: &shared.PlayReadyDrm{
                        Format: sdk.String("minima"),
                        InitializationVector: sdk.String("distinctio"),
                        Key: sdk.String("eligendi"),
                        KeyID: sdk.String("sit"),
                        KeyMd5: sdk.String("culpa"),
                        LicenseAcquisitionURL: sdk.String("tempore"),
                    },
                },
                shared.CreateJobPlaylist{
                    Format: sdk.String("adipisci"),
                    HlsContentProtection: &shared.HlsContentProtection{
                        InitializationVector: sdk.String("cumque"),
                        Key: sdk.String("consequuntur"),
                        KeyMd5: sdk.String("consequatur"),
                        KeyStoragePolicy: sdk.String("minus"),
                        LicenseAcquisitionURL: sdk.String("quaerat"),
                        Method: sdk.String("sapiente"),
                    },
                    Name: sdk.String("Joy Labadie"),
                    OutputKeys: []string{
                        "quas",
                        "esse",
                        "quasi",
                        "a",
                    },
                    PlayReadyDrm: &shared.PlayReadyDrm{
                        Format: sdk.String("error"),
                        InitializationVector: sdk.String("sint"),
                        Key: sdk.String("pariatur"),
                        KeyID: sdk.String("possimus"),
                        KeyMd5: sdk.String("quia"),
                        LicenseAcquisitionURL: sdk.String("eveniet"),
                    },
                },
            },
            UserMetadata: map[string]string{
                "facere": "veritatis",
                "consequuntur": "quasi",
                "similique": "culpa",
                "aliquid": "tenetur",
            },
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateJobResponse != nil {
        // handle response
    }
}
```

## CreatePipeline

The CreatePipeline operation creates a pipeline with settings that you specify.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePipeline(ctx, operations.CreatePipelineRequest{
        RequestBody: operations.CreatePipelineRequestBody{
            AwsKmsKeyArn: sdk.String("soluta"),
            ContentConfig: &operations.CreatePipelineRequestBodyContentConfig{
                Bucket: sdk.String("accusantium"),
                Permissions: []shared.Permission{
                    shared.Permission{
                        Access: []string{
                            "dicta",
                            "ullam",
                            "reprehenderit",
                            "ullam",
                        },
                        Grantee: sdk.String("nisi"),
                        GranteeType: sdk.String("aut"),
                    },
                    shared.Permission{
                        Access: []string{
                            "qui",
                            "quibusdam",
                            "ex",
                        },
                        Grantee: sdk.String("deleniti"),
                        GranteeType: sdk.String("itaque"),
                    },
                },
                StorageClass: sdk.String("dolorum"),
            },
            InputBucket: "architecto",
            Name: "Irvin Boyle III",
            Notifications: &operations.CreatePipelineRequestBodyNotifications{
                Completed: sdk.String("ipsa"),
                Error: sdk.String("minima"),
                Progressing: sdk.String("veritatis"),
                Warning: sdk.String("consectetur"),
            },
            OutputBucket: sdk.String("adipisci"),
            Role: "iste",
            ThumbnailConfig: &operations.CreatePipelineRequestBodyThumbnailConfig{
                Bucket: sdk.String("temporibus"),
                Permissions: []shared.Permission{
                    shared.Permission{
                        Access: []string{
                            "aut",
                            "laudantium",
                            "eum",
                        },
                        Grantee: sdk.String("mollitia"),
                        GranteeType: sdk.String("ab"),
                    },
                },
                StorageClass: sdk.String("corrupti"),
            },
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("voluptatem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePipelineResponse != nil {
        // handle response
    }
}
```

## CreatePreset

<p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePreset(ctx, operations.CreatePresetRequest{
        RequestBody: operations.CreatePresetRequestBody{
            Audio: &operations.CreatePresetRequestBodyAudio{
                AudioPackingMode: sdk.String("voluptas"),
                BitRate: sdk.String("aut"),
                Channels: sdk.String("dignissimos"),
                Codec: sdk.String("dicta"),
                CodecOptions: &shared.AudioCodecOptions{
                    BitDepth: sdk.String("maiores"),
                    BitOrder: sdk.String("natus"),
                    Profile: sdk.String("velit"),
                    Signed: sdk.String("voluptatibus"),
                },
                SampleRate: sdk.String("voluptas"),
            },
            Container: "asperiores",
            Description: sdk.String("aperiam"),
            Name: "Bertha Cruickshank",
            Thumbnails: &operations.CreatePresetRequestBodyThumbnails{
                AspectRatio: sdk.String("maxime"),
                Format: sdk.String("dignissimos"),
                Interval: sdk.String("officia"),
                MaxHeight: sdk.String("asperiores"),
                MaxWidth: sdk.String("nemo"),
                PaddingPolicy: sdk.String("quae"),
                Resolution: sdk.String("quaerat"),
                SizingPolicy: sdk.String("porro"),
            },
            Video: &operations.CreatePresetRequestBodyVideo{
                AspectRatio: sdk.String("quod"),
                BitRate: sdk.String("labore"),
                Codec: sdk.String("ab"),
                CodecOptions: map[string]string{
                    "fuga": "id",
                },
                DisplayAspectRatio: sdk.String("suscipit"),
                FixedGOP: sdk.String("velit"),
                FrameRate: sdk.String("culpa"),
                KeyframesMaxDist: sdk.String("est"),
                MaxFrameRate: sdk.String("recusandae"),
                MaxHeight: sdk.String("totam"),
                MaxWidth: sdk.String("fugiat"),
                PaddingPolicy: sdk.String("vel"),
                Resolution: sdk.String("ducimus"),
                SizingPolicy: sdk.String("quos"),
                Watermarks: []shared.PresetWatermark{
                    shared.PresetWatermark{
                        HorizontalAlign: sdk.String("labore"),
                        HorizontalOffset: sdk.String("possimus"),
                        ID: sdk.String("bb675fd5-e60b-4375-ad4f-6fbee41f3331"),
                        MaxHeight: sdk.String("dignissimos"),
                        MaxWidth: sdk.String("a"),
                        Opacity: sdk.String("debitis"),
                        SizingPolicy: sdk.String("consectetur"),
                        Target: sdk.String("corporis"),
                        VerticalAlign: sdk.String("harum"),
                        VerticalOffset: sdk.String("laboriosam"),
                    },
                    shared.PresetWatermark{
                        HorizontalAlign: sdk.String("ipsa"),
                        HorizontalOffset: sdk.String("voluptates"),
                        ID: sdk.String("b1ea4265-55ba-43c2-8744-ed53b88f3a8d"),
                        MaxHeight: sdk.String("totam"),
                        MaxWidth: sdk.String("hic"),
                        Opacity: sdk.String("exercitationem"),
                        SizingPolicy: sdk.String("nobis"),
                        Target: sdk.String("sit"),
                        VerticalAlign: sdk.String("rerum"),
                        VerticalOffset: sdk.String("sed"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("ab"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePresetResponse != nil {
        // handle response
    }
}
```

## DeletePipeline

<p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePipeline(ctx, operations.DeletePipelineRequest{
        ID: "94a276b2-6916-4fe1-b08f-4294e3698f44",
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("praesentium"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePipelineResponse != nil {
        // handle response
    }
}
```

## DeletePreset

<p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePreset(ctx, operations.DeletePresetRequest{
        ID: "b445e80c-a55e-4fd2-8e45-7e1858b6a89f",
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePresetResponse != nil {
        // handle response
    }
}
```

## ListJobsByPipeline

<p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListJobsByPipeline(ctx, operations.ListJobsByPipelineRequest{
        Ascending: sdk.String("corrupti"),
        PageToken: sdk.String("accusamus"),
        PipelineID: "tempora",
        XAmzAlgorithm: sdk.String("atque"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsByPipelineResponse != nil {
        // handle response
    }
}
```

## ListJobsByStatus

The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListJobsByStatus(ctx, operations.ListJobsByStatusRequest{
        Ascending: sdk.String("magnam"),
        PageToken: sdk.String("consequatur"),
        Status: "esse",
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("et"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsByStatusResponse != nil {
        // handle response
    }
}
```

## ListPipelines

The ListPipelines operation gets a list of the pipelines associated with the current AWS account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPipelines(ctx, operations.ListPipelinesRequest{
        Ascending: sdk.String("blanditiis"),
        PageToken: sdk.String("ex"),
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("consequatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPipelinesResponse != nil {
        // handle response
    }
}
```

## ListPresets

The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPresets(ctx, operations.ListPresetsRequest{
        Ascending: sdk.String("incidunt"),
        PageToken: sdk.String("reiciendis"),
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPresetsResponse != nil {
        // handle response
    }
}
```

## ReadJob

The ReadJob operation returns detailed information about a job.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ReadJob(ctx, operations.ReadJobRequest{
        ID: "8abf603a-79f9-4dfe-8ab7-da8a50ce187f",
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReadJobResponse != nil {
        // handle response
    }
}
```

## ReadPipeline

The ReadPipeline operation gets detailed information about a pipeline.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ReadPipeline(ctx, operations.ReadPipelineRequest{
        ID: "d689eee9-526f-48d9-86e8-81ead4f0e101",
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReadPipelineResponse != nil {
        // handle response
    }
}
```

## ReadPreset

The ReadPreset operation gets detailed information about a preset.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ReadPreset(ctx, operations.ReadPresetRequest{
        ID: "e29e973e-922a-457a-95be-3e060807e2b6",
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReadPresetResponse != nil {
        // handle response
    }
}
```

## ~~TestRole~~

<p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TestRole(ctx, operations.TestRoleRequest{
        RequestBody: operations.TestRoleRequestBody{
            InputBucket: "ad",
            OutputBucket: "repellat",
            Role: "alias",
            Topics: []string{
                "perspiciatis",
                "nihil",
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestRoleResponse != nil {
        // handle response
    }
}
```

## UpdatePipeline

<p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePipeline(ctx, operations.UpdatePipelineRequest{
        ID: "54a31e94-764a-43e8-a5e7-956f9251a5a9",
        RequestBody: operations.UpdatePipelineRequestBody{
            AwsKmsKeyArn: sdk.String("possimus"),
            ContentConfig: &operations.UpdatePipelineRequestBodyContentConfig{
                Bucket: sdk.String("animi"),
                Permissions: []shared.Permission{
                    shared.Permission{
                        Access: []string{
                            "accusantium",
                            "repellat",
                        },
                        Grantee: sdk.String("doloribus"),
                        GranteeType: sdk.String("ullam"),
                    },
                    shared.Permission{
                        Access: []string{
                            "nam",
                            "earum",
                        },
                        Grantee: sdk.String("officia"),
                        GranteeType: sdk.String("laborum"),
                    },
                },
                StorageClass: sdk.String("placeat"),
            },
            InputBucket: sdk.String("modi"),
            Name: sdk.String("Virgil Towne"),
            Notifications: &operations.UpdatePipelineRequestBodyNotifications{
                Completed: sdk.String("vitae"),
                Error: sdk.String("rerum"),
                Progressing: sdk.String("tempora"),
                Warning: sdk.String("quis"),
            },
            Role: sdk.String("inventore"),
            ThumbnailConfig: &operations.UpdatePipelineRequestBodyThumbnailConfig{
                Bucket: sdk.String("fugit"),
                Permissions: []shared.Permission{
                    shared.Permission{
                        Access: []string{
                            "perferendis",
                        },
                        Grantee: sdk.String("velit"),
                        GranteeType: sdk.String("aspernatur"),
                    },
                    shared.Permission{
                        Access: []string{
                            "eius",
                            "rem",
                        },
                        Grantee: sdk.String("at"),
                        GranteeType: sdk.String("impedit"),
                    },
                    shared.Permission{
                        Access: []string{
                            "sapiente",
                        },
                        Grantee: sdk.String("eum"),
                        GranteeType: sdk.String("dicta"),
                    },
                    shared.Permission{
                        Access: []string{
                            "beatae",
                            "cupiditate",
                        },
                        Grantee: sdk.String("provident"),
                        GranteeType: sdk.String("earum"),
                    },
                },
                StorageClass: sdk.String("soluta"),
            },
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePipelineResponse != nil {
        // handle response
    }
}
```

## UpdatePipelineNotifications

<p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePipelineNotifications(ctx, operations.UpdatePipelineNotificationsRequest{
        ID: "6c632ca3-aed0-4117-9963-12fde0477177",
        RequestBody: operations.UpdatePipelineNotificationsRequestBody{
            Notifications: operations.UpdatePipelineNotificationsRequestBodyNotifications{
                Completed: sdk.String("praesentium"),
                Error: sdk.String("maiores"),
                Progressing: sdk.String("reiciendis"),
                Warning: sdk.String("vel"),
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("doloremque"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePipelineNotificationsResponse != nil {
        // handle response
    }
}
```

## UpdatePipelineStatus

<p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePipelineStatus(ctx, operations.UpdatePipelineStatusRequest{
        ID: "6360a15d-b6a6-4606-99a1-adeaab5851d6",
        RequestBody: operations.UpdatePipelineStatusRequestBody{
            Status: "quo",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("molestias"),
        XAmzSignedHeaders: sdk.String("cum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePipelineStatusResponse != nil {
        // handle response
    }
}
```
