# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/voice-id/2021-09-27/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateFraudsterRequest{
        Headers: operations.AssociateFraudsterHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "VoiceID.AssociateFraudster",
        },
        Request: shared.AssociateFraudsterRequest{
            DomainID: "nihil",
            FraudsterID: "fuga",
            WatchlistID: "facilis",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateFraudster(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFraudsterResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateFraudster` - Associates the fraudsters with the watchlist specified in the same domain. 
* `CreateDomain` - Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.
* `CreateWatchlist` - Creates a watchlist that fraudsters can be a part of.
* `DeleteDomain` - Deletes the specified domain from Voice ID.
* `DeleteFraudster` - Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.
* `DeleteSpeaker` - Deletes the specified speaker from Voice ID.
* `DeleteWatchlist` - Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted. 
* `DescribeDomain` - Describes the specified domain.
* `DescribeFraudster` - Describes the specified fraudster.
* `DescribeFraudsterRegistrationJob` - Describes the specified fraudster registration job.
* `DescribeSpeaker` - Describes the specified speaker.
* `DescribeSpeakerEnrollmentJob` - Describes the specified speaker enrollment job.
* `DescribeWatchlist` - Describes the specified watchlist.
* `DisassociateFraudster` - Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown. 
* `EvaluateSession` - Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.
* `ListDomains` - Lists all the domains in the Amazon Web Services account. 
* `ListFraudsterRegistrationJobs` - Lists all the fraudster registration jobs in the domain with the given <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all fraudster registration jobs in the given domain. 
* `ListFraudsters` - Lists all fraudsters in a specified watchlist or domain.
* `ListSpeakerEnrollmentJobs` - Lists all the speaker enrollment jobs in the domain with the specified <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all jobs with all possible speaker enrollment job statuses.
* `ListSpeakers` - Lists all speakers in a specified domain.
* `ListTagsForResource` - Lists all tags associated with a specified Voice ID resource.
* `ListWatchlists` - Lists all watchlists in a specified domain.
* `OptOutSpeaker` - Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.
* `StartFraudsterRegistrationJob` - Starts a new batch fraudster registration job using provided details.
* `StartSpeakerEnrollmentJob` - Starts a new batch speaker enrollment job using specified details.
* `TagResource` - Tags a Voice ID resource with the provided list of tags.
* `UntagResource` - Removes specified tags from a specified Amazon Connect Voice ID resource.
* `UpdateDomain` - Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.
* `UpdateWatchlist` - Updates the specified watchlist. Every domain has a default watchlist which cannot be updated. 
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
