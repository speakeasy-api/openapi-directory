# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFraudsterRequest req = new AssociateFraudsterRequest(                new AssociateFraudsterRequest("provident", "distinctio", "quibusdam");, AssociateFraudsterXAmzTargetEnum.VOICE_ID_ASSOCIATE_FRAUDSTER) {{
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            AssociateFraudsterResponse res = sdk.associateFraudster(req);

            if (res.associateFraudsterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [associateFraudster](docs/sdk/README.md#associatefraudster) - Associates the fraudsters with the watchlist specified in the same domain. 
* [createDomain](docs/sdk/README.md#createdomain) - Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.
* [createWatchlist](docs/sdk/README.md#createwatchlist) - Creates a watchlist that fraudsters can be a part of.
* [deleteDomain](docs/sdk/README.md#deletedomain) - Deletes the specified domain from Voice ID.
* [deleteFraudster](docs/sdk/README.md#deletefraudster) - Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.
* [deleteSpeaker](docs/sdk/README.md#deletespeaker) - Deletes the specified speaker from Voice ID.
* [deleteWatchlist](docs/sdk/README.md#deletewatchlist) - Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted. 
* [describeDomain](docs/sdk/README.md#describedomain) - Describes the specified domain.
* [describeFraudster](docs/sdk/README.md#describefraudster) - Describes the specified fraudster.
* [describeFraudsterRegistrationJob](docs/sdk/README.md#describefraudsterregistrationjob) - Describes the specified fraudster registration job.
* [describeSpeaker](docs/sdk/README.md#describespeaker) - Describes the specified speaker.
* [describeSpeakerEnrollmentJob](docs/sdk/README.md#describespeakerenrollmentjob) - Describes the specified speaker enrollment job.
* [describeWatchlist](docs/sdk/README.md#describewatchlist) - Describes the specified watchlist.
* [disassociateFraudster](docs/sdk/README.md#disassociatefraudster) - Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown. 
* [evaluateSession](docs/sdk/README.md#evaluatesession) - Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.
* [listDomains](docs/sdk/README.md#listdomains) - Lists all the domains in the Amazon Web Services account. 
* [listFraudsterRegistrationJobs](docs/sdk/README.md#listfraudsterregistrationjobs) - Lists all the fraudster registration jobs in the domain with the given <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all fraudster registration jobs in the given domain. 
* [listFraudsters](docs/sdk/README.md#listfraudsters) - Lists all fraudsters in a specified watchlist or domain.
* [listSpeakerEnrollmentJobs](docs/sdk/README.md#listspeakerenrollmentjobs) - Lists all the speaker enrollment jobs in the domain with the specified <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all jobs with all possible speaker enrollment job statuses.
* [listSpeakers](docs/sdk/README.md#listspeakers) - Lists all speakers in a specified domain.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags associated with a specified Voice ID resource.
* [listWatchlists](docs/sdk/README.md#listwatchlists) - Lists all watchlists in a specified domain.
* [optOutSpeaker](docs/sdk/README.md#optoutspeaker) - Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.
* [startFraudsterRegistrationJob](docs/sdk/README.md#startfraudsterregistrationjob) - Starts a new batch fraudster registration job using provided details.
* [startSpeakerEnrollmentJob](docs/sdk/README.md#startspeakerenrollmentjob) - Starts a new batch speaker enrollment job using specified details.
* [tagResource](docs/sdk/README.md#tagresource) - Tags a Voice ID resource with the provided list of tags.
* [untagResource](docs/sdk/README.md#untagresource) - Removes specified tags from a specified Amazon Connect Voice ID resource.
* [updateDomain](docs/sdk/README.md#updatedomain) - Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.
* [updateWatchlist](docs/sdk/README.md#updatewatchlist) - Updates the specified watchlist. Every domain has a default watchlist which cannot be updated. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
