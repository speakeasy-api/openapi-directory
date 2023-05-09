# SDK

## Overview

Amazon Connect Voice ID provides real-time caller authentication and fraud risk detection, which make voice interactions in contact centers more secure and efficient.

Amazon Web Services documentation
<https://docs.aws.amazon.com/voiceid/>
### Available Operations

* [AssociateFraudster](#associatefraudster) - Associates the fraudsters with the watchlist specified in the same domain. 
* [CreateDomain](#createdomain) - Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.
* [CreateWatchlist](#createwatchlist) - Creates a watchlist that fraudsters can be a part of.
* [DeleteDomain](#deletedomain) - Deletes the specified domain from Voice ID.
* [DeleteFraudster](#deletefraudster) - Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.
* [DeleteSpeaker](#deletespeaker) - Deletes the specified speaker from Voice ID.
* [DeleteWatchlist](#deletewatchlist) - Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted. 
* [DescribeDomain](#describedomain) - Describes the specified domain.
* [DescribeFraudster](#describefraudster) - Describes the specified fraudster.
* [DescribeFraudsterRegistrationJob](#describefraudsterregistrationjob) - Describes the specified fraudster registration job.
* [DescribeSpeaker](#describespeaker) - Describes the specified speaker.
* [DescribeSpeakerEnrollmentJob](#describespeakerenrollmentjob) - Describes the specified speaker enrollment job.
* [DescribeWatchlist](#describewatchlist) - Describes the specified watchlist.
* [DisassociateFraudster](#disassociatefraudster) - Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown. 
* [EvaluateSession](#evaluatesession) - Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.
* [ListDomains](#listdomains) - Lists all the domains in the Amazon Web Services account. 
* [ListFraudsterRegistrationJobs](#listfraudsterregistrationjobs) - Lists all the fraudster registration jobs in the domain with the given <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all fraudster registration jobs in the given domain. 
* [ListFraudsters](#listfraudsters) - Lists all fraudsters in a specified watchlist or domain.
* [ListSpeakerEnrollmentJobs](#listspeakerenrollmentjobs) - Lists all the speaker enrollment jobs in the domain with the specified <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all jobs with all possible speaker enrollment job statuses.
* [ListSpeakers](#listspeakers) - Lists all speakers in a specified domain.
* [ListTagsForResource](#listtagsforresource) - Lists all tags associated with a specified Voice ID resource.
* [ListWatchlists](#listwatchlists) - Lists all watchlists in a specified domain.
* [OptOutSpeaker](#optoutspeaker) - Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.
* [StartFraudsterRegistrationJob](#startfraudsterregistrationjob) - Starts a new batch fraudster registration job using provided details.
* [StartSpeakerEnrollmentJob](#startspeakerenrollmentjob) - Starts a new batch speaker enrollment job using specified details.
* [TagResource](#tagresource) - Tags a Voice ID resource with the provided list of tags.
* [UntagResource](#untagresource) - Removes specified tags from a specified Amazon Connect Voice ID resource.
* [UpdateDomain](#updatedomain) - Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.
* [UpdateWatchlist](#updatewatchlist) - Updates the specified watchlist. Every domain has a default watchlist which cannot be updated. 

## AssociateFraudster

Associates the fraudsters with the watchlist specified in the same domain. 

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
    res, err := s.SDK.AssociateFraudster(ctx, operations.AssociateFraudsterRequest{
        AssociateFraudsterRequest: shared.AssociateFraudsterRequest{
            DomainID: "deserunt",
            FraudsterID: "suscipit",
            WatchlistID: "iure",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.AssociateFraudsterXAmzTargetEnumVoiceIDAssociateFraudster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFraudsterResponse != nil {
        // handle response
    }
}
```

## CreateDomain

Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.

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
    res, err := s.SDK.CreateDomain(ctx, operations.CreateDomainRequest{
        CreateDomainRequest: shared.CreateDomainRequest{
            ClientToken: sdk.String("minus"),
            Description: sdk.String("placeat"),
            Name: "voluptatum",
            ServerSideEncryptionConfiguration: shared.ServerSideEncryptionConfiguration{
                KmsKeyID: "iusto",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nisi",
                    Value: "recusandae",
                },
                shared.Tag{
                    Key: "temporibus",
                    Value: "ab",
                },
                shared.Tag{
                    Key: "quis",
                    Value: "veritatis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.CreateDomainXAmzTargetEnumVoiceIDCreateDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDomainResponse != nil {
        // handle response
    }
}
```

## CreateWatchlist

Creates a watchlist that fraudsters can be a part of.

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
    res, err := s.SDK.CreateWatchlist(ctx, operations.CreateWatchlistRequest{
        CreateWatchlistRequest: shared.CreateWatchlistRequest{
            ClientToken: sdk.String("at"),
            Description: sdk.String("at"),
            DomainID: "maiores",
            Name: "molestiae",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.CreateWatchlistXAmzTargetEnumVoiceIDCreateWatchlist,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWatchlistResponse != nil {
        // handle response
    }
}
```

## DeleteDomain

Deletes the specified domain from Voice ID.

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
    res, err := s.SDK.DeleteDomain(ctx, operations.DeleteDomainRequest{
        DeleteDomainRequest: shared.DeleteDomainRequest{
            DomainID: "nam",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.DeleteDomainXAmzTargetEnumVoiceIDDeleteDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFraudster

Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.

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
    res, err := s.SDK.DeleteFraudster(ctx, operations.DeleteFraudsterRequest{
        DeleteFraudsterRequest: shared.DeleteFraudsterRequest{
            DomainID: "beatae",
            FraudsterID: "commodi",
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DeleteFraudsterXAmzTargetEnumVoiceIDDeleteFraudster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSpeaker

Deletes the specified speaker from Voice ID.

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
    res, err := s.SDK.DeleteSpeaker(ctx, operations.DeleteSpeakerRequest{
        DeleteSpeakerRequest: shared.DeleteSpeakerRequest{
            DomainID: "excepturi",
            SpeakerID: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DeleteSpeakerXAmzTargetEnumVoiceIDDeleteSpeaker,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWatchlist

Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted. 

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
    res, err := s.SDK.DeleteWatchlist(ctx, operations.DeleteWatchlistRequest{
        DeleteWatchlistRequest: shared.DeleteWatchlistRequest{
            DomainID: "laboriosam",
            WatchlistID: "hic",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.DeleteWatchlistXAmzTargetEnumVoiceIDDeleteWatchlist,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeDomain

Describes the specified domain.

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
    res, err := s.SDK.DescribeDomain(ctx, operations.DescribeDomainRequest{
        DescribeDomainRequest: shared.DescribeDomainRequest{
            DomainID: "quidem",
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DescribeDomainXAmzTargetEnumVoiceIDDescribeDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDomainResponse != nil {
        // handle response
    }
}
```

## DescribeFraudster

Describes the specified fraudster.

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
    res, err := s.SDK.DescribeFraudster(ctx, operations.DescribeFraudsterRequest{
        DescribeFraudsterRequest: shared.DescribeFraudsterRequest{
            DomainID: "dolorem",
            FraudsterID: "corporis",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.DescribeFraudsterXAmzTargetEnumVoiceIDDescribeFraudster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFraudsterResponse != nil {
        // handle response
    }
}
```

## DescribeFraudsterRegistrationJob

Describes the specified fraudster registration job.

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
    res, err := s.SDK.DescribeFraudsterRegistrationJob(ctx, operations.DescribeFraudsterRegistrationJobRequest{
        DescribeFraudsterRegistrationJobRequest: shared.DescribeFraudsterRegistrationJobRequest{
            DomainID: "accusantium",
            JobID: "iure",
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.DescribeFraudsterRegistrationJobXAmzTargetEnumVoiceIDDescribeFraudsterRegistrationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFraudsterRegistrationJobResponse != nil {
        // handle response
    }
}
```

## DescribeSpeaker

Describes the specified speaker.

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
    res, err := s.SDK.DescribeSpeaker(ctx, operations.DescribeSpeakerRequest{
        DescribeSpeakerRequest: shared.DescribeSpeakerRequest{
            DomainID: "consequuntur",
            SpeakerID: "repellat",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzTarget: operations.DescribeSpeakerXAmzTargetEnumVoiceIDDescribeSpeaker,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSpeakerResponse != nil {
        // handle response
    }
}
```

## DescribeSpeakerEnrollmentJob

Describes the specified speaker enrollment job.

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
    res, err := s.SDK.DescribeSpeakerEnrollmentJob(ctx, operations.DescribeSpeakerEnrollmentJobRequest{
        DescribeSpeakerEnrollmentJobRequest: shared.DescribeSpeakerEnrollmentJobRequest{
            DomainID: "error",
            JobID: "quia",
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.DescribeSpeakerEnrollmentJobXAmzTargetEnumVoiceIDDescribeSpeakerEnrollmentJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSpeakerEnrollmentJobResponse != nil {
        // handle response
    }
}
```

## DescribeWatchlist

Describes the specified watchlist.

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
    res, err := s.SDK.DescribeWatchlist(ctx, operations.DescribeWatchlistRequest{
        DescribeWatchlistRequest: shared.DescribeWatchlistRequest{
            DomainID: "sequi",
            WatchlistID: "tenetur",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.DescribeWatchlistXAmzTargetEnumVoiceIDDescribeWatchlist,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWatchlistResponse != nil {
        // handle response
    }
}
```

## DisassociateFraudster

Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown. 

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
    res, err := s.SDK.DisassociateFraudster(ctx, operations.DisassociateFraudsterRequest{
        DisassociateFraudsterRequest: shared.DisassociateFraudsterRequest{
            DomainID: "laborum",
            FraudsterID: "quasi",
            WatchlistID: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.DisassociateFraudsterXAmzTargetEnumVoiceIDDisassociateFraudster,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateFraudsterResponse != nil {
        // handle response
    }
}
```

## EvaluateSession

Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.

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
    res, err := s.SDK.EvaluateSession(ctx, operations.EvaluateSessionRequest{
        EvaluateSessionRequest: shared.EvaluateSessionRequest{
            DomainID: "voluptate",
            SessionNameOrID: "cum",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.EvaluateSessionXAmzTargetEnumVoiceIDEvaluateSession,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EvaluateSessionResponse != nil {
        // handle response
    }
}
```

## ListDomains

Lists all the domains in the Amazon Web Services account. 

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
    res, err := s.SDK.ListDomains(ctx, operations.ListDomainsRequest{
        ListDomainsRequest: shared.ListDomainsRequest{
            MaxResults: sdk.Int64(296140),
            NextToken: sdk.String("iusto"),
        },
        MaxResults: sdk.String("dicta"),
        NextToken: sdk.String("harum"),
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.ListDomainsXAmzTargetEnumVoiceIDListDomains,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDomainsResponse != nil {
        // handle response
    }
}
```

## ListFraudsterRegistrationJobs

Lists all the fraudster registration jobs in the domain with the given <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all fraudster registration jobs in the given domain. 

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
    res, err := s.SDK.ListFraudsterRegistrationJobs(ctx, operations.ListFraudsterRegistrationJobsRequest{
        ListFraudsterRegistrationJobsRequest: shared.ListFraudsterRegistrationJobsRequest{
            DomainID: "molestias",
            JobStatus: shared.FraudsterRegistrationJobStatusEnumCompleted.ToPointer(),
            MaxResults: sdk.Int64(865103),
            NextToken: sdk.String("modi"),
        },
        MaxResults: sdk.String("praesentium"),
        NextToken: sdk.String("rem"),
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.ListFraudsterRegistrationJobsXAmzTargetEnumVoiceIDListFraudsterRegistrationJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFraudsterRegistrationJobsResponse != nil {
        // handle response
    }
}
```

## ListFraudsters

Lists all fraudsters in a specified watchlist or domain.

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
    res, err := s.SDK.ListFraudsters(ctx, operations.ListFraudstersRequest{
        ListFraudstersRequest: shared.ListFraudstersRequest{
            DomainID: "enim",
            MaxResults: sdk.Int64(9356),
            NextToken: sdk.String("est"),
            WatchlistID: sdk.String("quibusdam"),
        },
        MaxResults: sdk.String("explicabo"),
        NextToken: sdk.String("deserunt"),
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.ListFraudstersXAmzTargetEnumVoiceIDListFraudsters,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFraudstersResponse != nil {
        // handle response
    }
}
```

## ListSpeakerEnrollmentJobs

Lists all the speaker enrollment jobs in the domain with the specified <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all jobs with all possible speaker enrollment job statuses.

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
    res, err := s.SDK.ListSpeakerEnrollmentJobs(ctx, operations.ListSpeakerEnrollmentJobsRequest{
        ListSpeakerEnrollmentJobsRequest: shared.ListSpeakerEnrollmentJobsRequest{
            DomainID: "quos",
            JobStatus: shared.SpeakerEnrollmentJobStatusEnumSubmitted.ToPointer(),
            MaxResults: sdk.Int64(164940),
            NextToken: sdk.String("assumenda"),
        },
        MaxResults: sdk.String("ipsam"),
        NextToken: sdk.String("alias"),
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.ListSpeakerEnrollmentJobsXAmzTargetEnumVoiceIDListSpeakerEnrollmentJobs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSpeakerEnrollmentJobsResponse != nil {
        // handle response
    }
}
```

## ListSpeakers

Lists all speakers in a specified domain.

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
    res, err := s.SDK.ListSpeakers(ctx, operations.ListSpeakersRequest{
        ListSpeakersRequest: shared.ListSpeakersRequest{
            DomainID: "delectus",
            MaxResults: sdk.Int64(433288),
            NextToken: sdk.String("non"),
        },
        MaxResults: sdk.String("eligendi"),
        NextToken: sdk.String("sint"),
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.ListSpeakersXAmzTargetEnumVoiceIDListSpeakers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSpeakersResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all tags associated with a specified Voice ID resource.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "a",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumVoiceIDListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListWatchlists

Lists all watchlists in a specified domain.

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
    res, err := s.SDK.ListWatchlists(ctx, operations.ListWatchlistsRequest{
        ListWatchlistsRequest: shared.ListWatchlistsRequest{
            DomainID: "magnam",
            MaxResults: sdk.Int64(767024),
            NextToken: sdk.String("facere"),
        },
        MaxResults: sdk.String("ea"),
        NextToken: sdk.String("aliquid"),
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.ListWatchlistsXAmzTargetEnumVoiceIDListWatchlists,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWatchlistsResponse != nil {
        // handle response
    }
}
```

## OptOutSpeaker

Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.

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
    res, err := s.SDK.OptOutSpeaker(ctx, operations.OptOutSpeakerRequest{
        OptOutSpeakerRequest: shared.OptOutSpeakerRequest{
            DomainID: "quidem",
            SpeakerID: "provident",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.OptOutSpeakerXAmzTargetEnumVoiceIDOptOutSpeaker,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OptOutSpeakerResponse != nil {
        // handle response
    }
}
```

## StartFraudsterRegistrationJob

Starts a new batch fraudster registration job using provided details.

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
    res, err := s.SDK.StartFraudsterRegistrationJob(ctx, operations.StartFraudsterRegistrationJobRequest{
        StartFraudsterRegistrationJobRequest: shared.StartFraudsterRegistrationJobRequest{
            ClientToken: sdk.String("nisi"),
            DataAccessRoleArn: "vel",
            DomainID: "natus",
            InputDataConfig: shared.InputDataConfig{
                S3URI: "omnis",
            },
            JobName: sdk.String("molestiae"),
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("perferendis"),
                S3URI: "nihil",
            },
            RegistrationConfig: &shared.RegistrationConfig{
                DuplicateRegistrationAction: shared.DuplicateRegistrationActionEnumSkip.ToPointer(),
                FraudsterSimilarityThreshold: sdk.Int64(716075),
                WatchlistIds: []string{
                    "labore",
                    "labore",
                    "suscipit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.StartFraudsterRegistrationJobXAmzTargetEnumVoiceIDStartFraudsterRegistrationJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartFraudsterRegistrationJobResponse != nil {
        // handle response
    }
}
```

## StartSpeakerEnrollmentJob

Starts a new batch speaker enrollment job using specified details.

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
    res, err := s.SDK.StartSpeakerEnrollmentJob(ctx, operations.StartSpeakerEnrollmentJobRequest{
        StartSpeakerEnrollmentJobRequest: shared.StartSpeakerEnrollmentJobRequest{
            ClientToken: sdk.String("et"),
            DataAccessRoleArn: "excepturi",
            DomainID: "ullam",
            EnrollmentConfig: &shared.EnrollmentConfig{
                ExistingEnrollmentAction: shared.ExistingEnrollmentActionEnumOverwrite.ToPointer(),
                FraudDetectionConfig: &shared.EnrollmentJobFraudDetectionConfig{
                    FraudDetectionAction: shared.FraudDetectionActionEnumFail.ToPointer(),
                    RiskThreshold: sdk.Int64(574325),
                    WatchlistIds: []string{
                        "mollitia",
                    },
                },
            },
            InputDataConfig: shared.InputDataConfig{
                S3URI: "reiciendis",
            },
            JobName: sdk.String("mollitia"),
            OutputDataConfig: shared.OutputDataConfig{
                KmsKeyID: sdk.String("ad"),
                S3URI: "eum",
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.StartSpeakerEnrollmentJobXAmzTargetEnumVoiceIDStartSpeakerEnrollmentJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartSpeakerEnrollmentJobResponse != nil {
        // handle response
    }
}
```

## TagResource

Tags a Voice ID resource with the provided list of tags.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "debitis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "maxime",
                    Value: "deleniti",
                },
                shared.Tag{
                    Key: "facilis",
                    Value: "in",
                },
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumVoiceIDTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes specified tags from a specified Amazon Connect Voice ID resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "quibusdam",
            TagKeys: []string{
                "saepe",
            },
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("accusantium"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumVoiceIDUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateDomain

Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.

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
    res, err := s.SDK.UpdateDomain(ctx, operations.UpdateDomainRequest{
        UpdateDomainRequest: shared.UpdateDomainRequest{
            Description: sdk.String("quo"),
            DomainID: "illum",
            Name: "pariatur",
            ServerSideEncryptionConfiguration: shared.ServerSideEncryptionConfiguration{
                KmsKeyID: "maxime",
            },
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.UpdateDomainXAmzTargetEnumVoiceIDUpdateDomain,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDomainResponse != nil {
        // handle response
    }
}
```

## UpdateWatchlist

Updates the specified watchlist. Every domain has a default watchlist which cannot be updated. 

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
    res, err := s.SDK.UpdateWatchlist(ctx, operations.UpdateWatchlistRequest{
        UpdateWatchlistRequest: shared.UpdateWatchlistRequest{
            Description: sdk.String("quidem"),
            DomainID: "ipsam",
            Name: sdk.String("voluptate"),
            WatchlistID: "autem",
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("fugiat"),
        XAmzTarget: operations.UpdateWatchlistXAmzTargetEnumVoiceIDUpdateWatchlist,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWatchlistResponse != nil {
        // handle response
    }
}
```
