# SDK

## Overview

Amazon Connect Voice ID provides real-time caller authentication and fraud risk detection, which make voice interactions in contact centers more secure and efficient.

Amazon Web Services documentation
<https://docs.aws.amazon.com/voiceid/>
### Available Operations

* [associateFraudster](#associatefraudster) - Associates the fraudsters with the watchlist specified in the same domain. 
* [createDomain](#createdomain) - Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.
* [createWatchlist](#createwatchlist) - Creates a watchlist that fraudsters can be a part of.
* [deleteDomain](#deletedomain) - Deletes the specified domain from Voice ID.
* [deleteFraudster](#deletefraudster) - Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.
* [deleteSpeaker](#deletespeaker) - Deletes the specified speaker from Voice ID.
* [deleteWatchlist](#deletewatchlist) - Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted. 
* [describeDomain](#describedomain) - Describes the specified domain.
* [describeFraudster](#describefraudster) - Describes the specified fraudster.
* [describeFraudsterRegistrationJob](#describefraudsterregistrationjob) - Describes the specified fraudster registration job.
* [describeSpeaker](#describespeaker) - Describes the specified speaker.
* [describeSpeakerEnrollmentJob](#describespeakerenrollmentjob) - Describes the specified speaker enrollment job.
* [describeWatchlist](#describewatchlist) - Describes the specified watchlist.
* [disassociateFraudster](#disassociatefraudster) - Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown. 
* [evaluateSession](#evaluatesession) - Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.
* [listDomains](#listdomains) - Lists all the domains in the Amazon Web Services account. 
* [listFraudsterRegistrationJobs](#listfraudsterregistrationjobs) - Lists all the fraudster registration jobs in the domain with the given <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all fraudster registration jobs in the given domain. 
* [listFraudsters](#listfraudsters) - Lists all fraudsters in a specified watchlist or domain.
* [listSpeakerEnrollmentJobs](#listspeakerenrollmentjobs) - Lists all the speaker enrollment jobs in the domain with the specified <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all jobs with all possible speaker enrollment job statuses.
* [listSpeakers](#listspeakers) - Lists all speakers in a specified domain.
* [listTagsForResource](#listtagsforresource) - Lists all tags associated with a specified Voice ID resource.
* [listWatchlists](#listwatchlists) - Lists all watchlists in a specified domain.
* [optOutSpeaker](#optoutspeaker) - Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.
* [startFraudsterRegistrationJob](#startfraudsterregistrationjob) - Starts a new batch fraudster registration job using provided details.
* [startSpeakerEnrollmentJob](#startspeakerenrollmentjob) - Starts a new batch speaker enrollment job using specified details.
* [tagResource](#tagresource) - Tags a Voice ID resource with the provided list of tags.
* [untagResource](#untagresource) - Removes specified tags from a specified Amazon Connect Voice ID resource.
* [updateDomain](#updatedomain) - Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.
* [updateWatchlist](#updatewatchlist) - Updates the specified watchlist. Every domain has a default watchlist which cannot be updated. 

## associateFraudster

Associates the fraudsters with the watchlist specified in the same domain. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateFraudsterRequest;
import org.openapis.openapi.models.operations.AssociateFraudsterResponse;
import org.openapis.openapi.models.operations.AssociateFraudsterXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateFraudsterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFraudsterRequest req = new AssociateFraudsterRequest(                new AssociateFraudsterRequest("iure", "magnam", "debitis");, AssociateFraudsterXAmzTargetEnum.VOICE_ID_ASSOCIATE_FRAUDSTER) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "tempora";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "placeat";
            }};            

            AssociateFraudsterResponse res = sdk.sdk.associateFraudster(req);

            if (res.associateFraudsterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDomain

Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomainRequest;
import org.openapis.openapi.models.operations.CreateDomainResponse;
import org.openapis.openapi.models.operations.CreateDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDomainRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerSideEncryptionConfiguration;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDomainRequest req = new CreateDomainRequest(                new CreateDomainRequest("iusto",                 new ServerSideEncryptionConfiguration("excepturi");) {{
                                clientToken = "nisi";
                                description = "recusandae";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("veritatis", "deserunt") {{
                                        key = "ab";
                                        value = "quis";
                                    }}),
                                    add(new Tag("repellendus", "sapiente") {{
                                        key = "perferendis";
                                        value = "ipsam";
                                    }}),
                                    add(new Tag("at", "at") {{
                                        key = "quo";
                                        value = "odit";
                                    }}),
                                    add(new Tag("quod", "quod") {{
                                        key = "maiores";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};, CreateDomainXAmzTargetEnum.VOICE_ID_CREATE_DOMAIN) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
            }};            

            CreateDomainResponse res = sdk.sdk.createDomain(req);

            if (res.createDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWatchlist

Creates a watchlist that fraudsters can be a part of.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWatchlistRequest;
import org.openapis.openapi.models.operations.CreateWatchlistResponse;
import org.openapis.openapi.models.operations.CreateWatchlistXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateWatchlistRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWatchlistRequest req = new CreateWatchlistRequest(                new CreateWatchlistRequest("fugit", "deleniti") {{
                                clientToken = "hic";
                                description = "optio";
                            }};, CreateWatchlistXAmzTargetEnum.VOICE_ID_CREATE_WATCHLIST) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "commodi";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
            }};            

            CreateWatchlistResponse res = sdk.sdk.createWatchlist(req);

            if (res.createWatchlistResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDomain

Deletes the specified domain from Voice ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDomainRequest;
import org.openapis.openapi.models.operations.DeleteDomainResponse;
import org.openapis.openapi.models.operations.DeleteDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDomainRequest req = new DeleteDomainRequest(                new DeleteDomainRequest("esse");, DeleteDomainXAmzTargetEnum.VOICE_ID_DELETE_DOMAIN) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "aspernatur";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ad";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "sed";
            }};            

            DeleteDomainResponse res = sdk.sdk.deleteDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFraudster

Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFraudsterRequest;
import org.openapis.openapi.models.operations.DeleteFraudsterResponse;
import org.openapis.openapi.models.operations.DeleteFraudsterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFraudsterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFraudsterRequest req = new DeleteFraudsterRequest(                new DeleteFraudsterRequest("dolor", "natus");, DeleteFraudsterXAmzTargetEnum.VOICE_ID_DELETE_FRAUDSTER) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "hic";
                xAmzCredential = "saepe";
                xAmzDate = "fuga";
                xAmzSecurityToken = "in";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "iste";
            }};            

            DeleteFraudsterResponse res = sdk.sdk.deleteFraudster(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSpeaker

Deletes the specified speaker from Voice ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSpeakerRequest;
import org.openapis.openapi.models.operations.DeleteSpeakerResponse;
import org.openapis.openapi.models.operations.DeleteSpeakerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSpeakerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSpeakerRequest req = new DeleteSpeakerRequest(                new DeleteSpeakerRequest("saepe", "quidem");, DeleteSpeakerXAmzTargetEnum.VOICE_ID_DELETE_SPEAKER) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "reiciendis";
                xAmzDate = "est";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "dolores";
            }};            

            DeleteSpeakerResponse res = sdk.sdk.deleteSpeaker(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWatchlist

Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWatchlistRequest;
import org.openapis.openapi.models.operations.DeleteWatchlistResponse;
import org.openapis.openapi.models.operations.DeleteWatchlistXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWatchlistRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWatchlistRequest req = new DeleteWatchlistRequest(                new DeleteWatchlistRequest("corporis", "explicabo");, DeleteWatchlistXAmzTargetEnum.VOICE_ID_DELETE_WATCHLIST) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            DeleteWatchlistResponse res = sdk.sdk.deleteWatchlist(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDomain

Describes the specified domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDomainRequest;
import org.openapis.openapi.models.operations.DescribeDomainResponse;
import org.openapis.openapi.models.operations.DescribeDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDomainRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDomainRequest req = new DescribeDomainRequest(                new DescribeDomainRequest("culpa");, DescribeDomainXAmzTargetEnum.VOICE_ID_DESCRIBE_DOMAIN) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            DescribeDomainResponse res = sdk.sdk.describeDomain(req);

            if (res.describeDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFraudster

Describes the specified fraudster.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFraudsterRequest;
import org.openapis.openapi.models.operations.DescribeFraudsterResponse;
import org.openapis.openapi.models.operations.DescribeFraudsterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFraudsterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFraudsterRequest req = new DescribeFraudsterRequest(                new DescribeFraudsterRequest("mollitia", "occaecati");, DescribeFraudsterXAmzTargetEnum.VOICE_ID_DESCRIBE_FRAUDSTER) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quam";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "velit";
                xAmzSignature = "error";
                xAmzSignedHeaders = "quia";
            }};            

            DescribeFraudsterResponse res = sdk.sdk.describeFraudster(req);

            if (res.describeFraudsterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFraudsterRegistrationJob

Describes the specified fraudster registration job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFraudsterRegistrationJobRequest;
import org.openapis.openapi.models.operations.DescribeFraudsterRegistrationJobResponse;
import org.openapis.openapi.models.operations.DescribeFraudsterRegistrationJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFraudsterRegistrationJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFraudsterRegistrationJobRequest req = new DescribeFraudsterRegistrationJobRequest(                new DescribeFraudsterRegistrationJobRequest("vitae", "laborum");, DescribeFraudsterRegistrationJobXAmzTargetEnum.VOICE_ID_DESCRIBE_FRAUDSTER_REGISTRATION_JOB) {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "enim";
                xAmzCredential = "odit";
                xAmzDate = "quo";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "ipsam";
            }};            

            DescribeFraudsterRegistrationJobResponse res = sdk.sdk.describeFraudsterRegistrationJob(req);

            if (res.describeFraudsterRegistrationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSpeaker

Describes the specified speaker.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSpeakerRequest;
import org.openapis.openapi.models.operations.DescribeSpeakerResponse;
import org.openapis.openapi.models.operations.DescribeSpeakerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSpeakerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSpeakerRequest req = new DescribeSpeakerRequest(                new DescribeSpeakerRequest("possimus", "aut");, DescribeSpeakerXAmzTargetEnum.VOICE_ID_DESCRIBE_SPEAKER) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DescribeSpeakerResponse res = sdk.sdk.describeSpeaker(req);

            if (res.describeSpeakerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSpeakerEnrollmentJob

Describes the specified speaker enrollment job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSpeakerEnrollmentJobRequest;
import org.openapis.openapi.models.operations.DescribeSpeakerEnrollmentJobResponse;
import org.openapis.openapi.models.operations.DescribeSpeakerEnrollmentJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSpeakerEnrollmentJobRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSpeakerEnrollmentJobRequest req = new DescribeSpeakerEnrollmentJobRequest(                new DescribeSpeakerEnrollmentJobRequest("nihil", "praesentium");, DescribeSpeakerEnrollmentJobXAmzTargetEnum.VOICE_ID_DESCRIBE_SPEAKER_ENROLLMENT_JOB) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "omnis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "cum";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "doloremque";
            }};            

            DescribeSpeakerEnrollmentJobResponse res = sdk.sdk.describeSpeakerEnrollmentJob(req);

            if (res.describeSpeakerEnrollmentJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWatchlist

Describes the specified watchlist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWatchlistRequest;
import org.openapis.openapi.models.operations.DescribeWatchlistResponse;
import org.openapis.openapi.models.operations.DescribeWatchlistXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWatchlistRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWatchlistRequest req = new DescribeWatchlistRequest(                new DescribeWatchlistRequest("ut", "maiores");, DescribeWatchlistXAmzTargetEnum.VOICE_ID_DESCRIBE_WATCHLIST) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "dolore";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "enim";
            }};            

            DescribeWatchlistResponse res = sdk.sdk.describeWatchlist(req);

            if (res.describeWatchlistResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateFraudster

Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateFraudsterRequest;
import org.openapis.openapi.models.operations.DisassociateFraudsterResponse;
import org.openapis.openapi.models.operations.DisassociateFraudsterXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateFraudsterRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateFraudsterRequest req = new DisassociateFraudsterRequest(                new DisassociateFraudsterRequest("commodi", "repudiandae", "quae");, DisassociateFraudsterXAmzTargetEnum.VOICE_ID_DISASSOCIATE_FRAUDSTER) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            DisassociateFraudsterResponse res = sdk.sdk.disassociateFraudster(req);

            if (res.disassociateFraudsterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## evaluateSession

Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EvaluateSessionRequest;
import org.openapis.openapi.models.operations.EvaluateSessionResponse;
import org.openapis.openapi.models.operations.EvaluateSessionXAmzTargetEnum;
import org.openapis.openapi.models.shared.EvaluateSessionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EvaluateSessionRequest req = new EvaluateSessionRequest(                new EvaluateSessionRequest("voluptates", "quasi");, EvaluateSessionXAmzTargetEnum.VOICE_ID_EVALUATE_SESSION) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "sint";
                xAmzCredential = "veritatis";
                xAmzDate = "itaque";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "consequatur";
            }};            

            EvaluateSessionResponse res = sdk.sdk.evaluateSession(req);

            if (res.evaluateSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDomains

Lists all the domains in the Amazon Web Services account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDomainsRequest;
import org.openapis.openapi.models.operations.ListDomainsResponse;
import org.openapis.openapi.models.operations.ListDomainsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListDomainsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDomainsRequest req = new ListDomainsRequest(                new ListDomainsRequest() {{
                                maxResults = 842342L;
                                nextToken = "explicabo";
                            }};, ListDomainsXAmzTargetEnum.VOICE_ID_LIST_DOMAINS) {{
                maxResults = "deserunt";
                nextToken = "distinctio";
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "labore";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "quos";
            }};            

            ListDomainsResponse res = sdk.sdk.listDomains(req);

            if (res.listDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFraudsterRegistrationJobs

Lists all the fraudster registration jobs in the domain with the given <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all fraudster registration jobs in the given domain. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFraudsterRegistrationJobsRequest;
import org.openapis.openapi.models.operations.ListFraudsterRegistrationJobsResponse;
import org.openapis.openapi.models.operations.ListFraudsterRegistrationJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.FraudsterRegistrationJobStatusEnum;
import org.openapis.openapi.models.shared.ListFraudsterRegistrationJobsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFraudsterRegistrationJobsRequest req = new ListFraudsterRegistrationJobsRequest(                new ListFraudsterRegistrationJobsRequest("magni") {{
                                jobStatus = FraudsterRegistrationJobStatusEnum.FAILED;
                                maxResults = 369808L;
                                nextToken = "alias";
                            }};, ListFraudsterRegistrationJobsXAmzTargetEnum.VOICE_ID_LIST_FRAUDSTER_REGISTRATION_JOBS) {{
                maxResults = "fugit";
                nextToken = "dolorum";
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "facilis";
                xAmzDate = "tempore";
                xAmzSecurityToken = "labore";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "eum";
            }};            

            ListFraudsterRegistrationJobsResponse res = sdk.sdk.listFraudsterRegistrationJobs(req);

            if (res.listFraudsterRegistrationJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFraudsters

Lists all fraudsters in a specified watchlist or domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFraudstersRequest;
import org.openapis.openapi.models.operations.ListFraudstersResponse;
import org.openapis.openapi.models.operations.ListFraudstersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFraudstersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFraudstersRequest req = new ListFraudstersRequest(                new ListFraudstersRequest("eligendi") {{
                                maxResults = 576157L;
                                nextToken = "aliquid";
                                watchlistId = "provident";
                            }};, ListFraudstersXAmzTargetEnum.VOICE_ID_LIST_FRAUDSTERS) {{
                maxResults = "necessitatibus";
                nextToken = "sint";
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "debitis";
                xAmzDate = "a";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "in";
                xAmzSignedHeaders = "in";
            }};            

            ListFraudstersResponse res = sdk.sdk.listFraudsters(req);

            if (res.listFraudstersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSpeakerEnrollmentJobs

Lists all the speaker enrollment jobs in the domain with the specified <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all jobs with all possible speaker enrollment job statuses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSpeakerEnrollmentJobsRequest;
import org.openapis.openapi.models.operations.ListSpeakerEnrollmentJobsResponse;
import org.openapis.openapi.models.operations.ListSpeakerEnrollmentJobsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSpeakerEnrollmentJobsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SpeakerEnrollmentJobStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSpeakerEnrollmentJobsRequest req = new ListSpeakerEnrollmentJobsRequest(                new ListSpeakerEnrollmentJobsRequest("maiores") {{
                                jobStatus = SpeakerEnrollmentJobStatusEnum.COMPLETED_WITH_ERRORS;
                                maxResults = 116202L;
                                nextToken = "magnam";
                            }};, ListSpeakerEnrollmentJobsXAmzTargetEnum.VOICE_ID_LIST_SPEAKER_ENROLLMENT_JOBS) {{
                maxResults = "cumque";
                nextToken = "facere";
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            ListSpeakerEnrollmentJobsResponse res = sdk.sdk.listSpeakerEnrollmentJobs(req);

            if (res.listSpeakerEnrollmentJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSpeakers

Lists all speakers in a specified domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSpeakersRequest;
import org.openapis.openapi.models.operations.ListSpeakersResponse;
import org.openapis.openapi.models.operations.ListSpeakersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSpeakersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSpeakersRequest req = new ListSpeakersRequest(                new ListSpeakersRequest("delectus") {{
                                maxResults = 692532L;
                                nextToken = "provident";
                            }};, ListSpeakersXAmzTargetEnum.VOICE_ID_LIST_SPEAKERS) {{
                maxResults = "nam";
                nextToken = "id";
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "sapiente";
                xAmzDate = "amet";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "vel";
            }};            

            ListSpeakersResponse res = sdk.sdk.listSpeakers(req);

            if (res.listSpeakersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all tags associated with a specified Voice ID resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("omnis");, ListTagsForResourceXAmzTargetEnum.VOICE_ID_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWatchlists

Lists all watchlists in a specified domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWatchlistsRequest;
import org.openapis.openapi.models.operations.ListWatchlistsResponse;
import org.openapis.openapi.models.operations.ListWatchlistsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListWatchlistsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWatchlistsRequest req = new ListWatchlistsRequest(                new ListWatchlistsRequest("suscipit") {{
                                maxResults = 618016L;
                                nextToken = "nobis";
                            }};, ListWatchlistsXAmzTargetEnum.VOICE_ID_LIST_WATCHLISTS) {{
                maxResults = "eum";
                nextToken = "vero";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            ListWatchlistsResponse res = sdk.sdk.listWatchlists(req);

            if (res.listWatchlistsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optOutSpeaker

Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptOutSpeakerRequest;
import org.openapis.openapi.models.operations.OptOutSpeakerResponse;
import org.openapis.openapi.models.operations.OptOutSpeakerXAmzTargetEnum;
import org.openapis.openapi.models.shared.OptOutSpeakerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            OptOutSpeakerRequest req = new OptOutSpeakerRequest(                new OptOutSpeakerRequest("sint", "accusantium");, OptOutSpeakerXAmzTargetEnum.VOICE_ID_OPT_OUT_SPEAKER) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "mollitia";
                xAmzDate = "ad";
                xAmzSecurityToken = "eum";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            OptOutSpeakerResponse res = sdk.sdk.optOutSpeaker(req);

            if (res.optOutSpeakerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startFraudsterRegistrationJob

Starts a new batch fraudster registration job using provided details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartFraudsterRegistrationJobRequest;
import org.openapis.openapi.models.operations.StartFraudsterRegistrationJobResponse;
import org.openapis.openapi.models.operations.StartFraudsterRegistrationJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.DuplicateRegistrationActionEnum;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.RegistrationConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartFraudsterRegistrationJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartFraudsterRegistrationJobRequest req = new StartFraudsterRegistrationJobRequest(                new StartFraudsterRegistrationJobRequest("nemo", "quasi",                 new InputDataConfig("iure");,                 new OutputDataConfig("doloribus") {{
                                                kmsKeyId = "debitis";
                                            }};) {{
                                clientToken = "eius";
                                jobName = "maxime";
                                registrationConfig = new RegistrationConfig() {{
                                    duplicateRegistrationAction = DuplicateRegistrationActionEnum.REGISTER_AS_NEW;
                                    fraudsterSimilarityThreshold = 703889L;
                                    watchlistIds = new String[]{{
                                        add("architecto"),
                                        add("architecto"),
                                    }};
                                }};;
                            }};, StartFraudsterRegistrationJobXAmzTargetEnum.VOICE_ID_START_FRAUDSTER_REGISTRATION_JOB) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            StartFraudsterRegistrationJobResponse res = sdk.sdk.startFraudsterRegistrationJob(req);

            if (res.startFraudsterRegistrationJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startSpeakerEnrollmentJob

Starts a new batch speaker enrollment job using specified details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartSpeakerEnrollmentJobRequest;
import org.openapis.openapi.models.operations.StartSpeakerEnrollmentJobResponse;
import org.openapis.openapi.models.operations.StartSpeakerEnrollmentJobXAmzTargetEnum;
import org.openapis.openapi.models.shared.EnrollmentConfig;
import org.openapis.openapi.models.shared.EnrollmentJobFraudDetectionConfig;
import org.openapis.openapi.models.shared.ExistingEnrollmentActionEnum;
import org.openapis.openapi.models.shared.FraudDetectionActionEnum;
import org.openapis.openapi.models.shared.InputDataConfig;
import org.openapis.openapi.models.shared.OutputDataConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartSpeakerEnrollmentJobRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartSpeakerEnrollmentJobRequest req = new StartSpeakerEnrollmentJobRequest(                new StartSpeakerEnrollmentJobRequest("pariatur", "accusantium",                 new InputDataConfig("consequuntur");,                 new OutputDataConfig("praesentium") {{
                                                kmsKeyId = "natus";
                                            }};) {{
                                clientToken = "magni";
                                enrollmentConfig = new EnrollmentConfig() {{
                                    existingEnrollmentAction = ExistingEnrollmentActionEnum.SKIP;
                                    fraudDetectionConfig = new EnrollmentJobFraudDetectionConfig() {{
                                        fraudDetectionAction = FraudDetectionActionEnum.FAIL;
                                        riskThreshold = 848009L;
                                        watchlistIds = new String[]{{
                                            add("maxime"),
                                            add("ea"),
                                            add("excepturi"),
                                            add("odit"),
                                        }};
                                    }};;
                                }};;
                                jobName = "ea";
                            }};, StartSpeakerEnrollmentJobXAmzTargetEnum.VOICE_ID_START_SPEAKER_ENROLLMENT_JOB) {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ab";
                xAmzCredential = "maiores";
                xAmzDate = "quidem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "autem";
            }};            

            StartSpeakerEnrollmentJobResponse res = sdk.sdk.startSpeakerEnrollmentJob(req);

            if (res.startSpeakerEnrollmentJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Tags a Voice ID resource with the provided list of tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("eaque",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("perferendis", "fugiat") {{
                                                    key = "nemo";
                                                    value = "voluptatibus";
                                                }}),
                                                add(new Tag("cumque", "corporis") {{
                                                    key = "amet";
                                                    value = "aut";
                                                }}),
                                                add(new Tag("nobis", "dolores") {{
                                                    key = "hic";
                                                    value = "libero";
                                                }}),
                                                add(new Tag("dignissimos", "eaque") {{
                                                    key = "quis";
                                                    value = "totam";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.VOICE_ID_TAG_RESOURCE) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes specified tags from a specified Amazon Connect Voice ID resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("vero",                 new String[]{{
                                                add("hic"),
                                                add("recusandae"),
                                            }});, UntagResourceXAmzTargetEnum.VOICE_ID_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "porro";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "blanditiis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDomain

Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainRequest;
import org.openapis.openapi.models.operations.UpdateDomainResponse;
import org.openapis.openapi.models.operations.UpdateDomainXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerSideEncryptionConfiguration;
import org.openapis.openapi.models.shared.UpdateDomainRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDomainRequest req = new UpdateDomainRequest(                new UpdateDomainRequest("eaque", "occaecati",                 new ServerSideEncryptionConfiguration("rerum");) {{
                                description = "adipisci";
                            }};, UpdateDomainXAmzTargetEnum.VOICE_ID_UPDATE_DOMAIN) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "earum";
                xAmzCredential = "modi";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "pariatur";
            }};            

            UpdateDomainResponse res = sdk.sdk.updateDomain(req);

            if (res.updateDomainResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWatchlist

Updates the specified watchlist. Every domain has a default watchlist which cannot be updated. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWatchlistRequest;
import org.openapis.openapi.models.operations.UpdateWatchlistResponse;
import org.openapis.openapi.models.operations.UpdateWatchlistXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateWatchlistRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWatchlistRequest req = new UpdateWatchlistRequest(                new UpdateWatchlistRequest("nobis", "libero") {{
                                description = "delectus";
                                name = "quaerat";
                            }};, UpdateWatchlistXAmzTargetEnum.VOICE_ID_UPDATE_WATCHLIST) {{
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "dolorem";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "ipsum";
            }};            

            UpdateWatchlistResponse res = sdk.sdk.updateWatchlist(req);

            if (res.updateWatchlistResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
