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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateFraudsterXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateFraudsterHeaders;
import org.openapis.openapi.models.operations.AssociateFraudsterRequest;
import org.openapis.openapi.models.operations.AssociateFraudsterResponse;
import org.openapis.openapi.models.shared.AssociateFraudsterRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AssociateFraudsterRequest req = new AssociateFraudsterRequest() {{
                headers = new AssociateFraudsterHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "VoiceID.AssociateFraudster";
                }};
                request = new AssociateFraudsterRequest() {{
                    domainId = "illum";
                    fraudsterId = "vel";
                    watchlistId = "error";
                }};
            }};            

            AssociateFraudsterResponse res = sdk.associateFraudster(req);

            if (res.associateFraudsterResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateFraudster` - Associates the fraudsters with the watchlist specified in the same domain. 
* `createDomain` - Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.
* `createWatchlist` - Creates a watchlist that fraudsters can be a part of.
* `deleteDomain` - Deletes the specified domain from Voice ID.
* `deleteFraudster` - Deletes the specified fraudster from Voice ID. This action disassociates the fraudster from any watchlists it is a part of.
* `deleteSpeaker` - Deletes the specified speaker from Voice ID.
* `deleteWatchlist` - Deletes the specified watchlist from Voice ID. This API throws an exception when there are fraudsters in the watchlist that you are trying to delete. You must delete the fraudsters, and then delete the watchlist. Every domain has a default watchlist which cannot be deleted. 
* `describeDomain` - Describes the specified domain.
* `describeFraudster` - Describes the specified fraudster.
* `describeFraudsterRegistrationJob` - Describes the specified fraudster registration job.
* `describeSpeaker` - Describes the specified speaker.
* `describeSpeakerEnrollmentJob` - Describes the specified speaker enrollment job.
* `describeWatchlist` - Describes the specified watchlist.
* `disassociateFraudster` - Disassociates the fraudsters from the watchlist specified. Voice ID always expects a fraudster to be a part of at least one watchlist. If you try to disassociate a fraudster from its only watchlist, a <code>ValidationException</code> is thrown. 
* `evaluateSession` - Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.
* `listDomains` - Lists all the domains in the Amazon Web Services account. 
* `listFraudsterRegistrationJobs` - Lists all the fraudster registration jobs in the domain with the given <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all fraudster registration jobs in the given domain. 
* `listFraudsters` - Lists all fraudsters in a specified watchlist or domain.
* `listSpeakerEnrollmentJobs` - Lists all the speaker enrollment jobs in the domain with the specified <code>JobStatus</code>. If <code>JobStatus</code> is not provided, this lists all jobs with all possible speaker enrollment job statuses.
* `listSpeakers` - Lists all speakers in a specified domain.
* `listTagsForResource` - Lists all tags associated with a specified Voice ID resource.
* `listWatchlists` - Lists all watchlists in a specified domain.
* `optOutSpeaker` - Opts out a speaker from Voice ID. A speaker can be opted out regardless of whether or not they already exist in Voice ID. If they don't yet exist, a new speaker is created in an opted out state. If they already exist, their existing status is overridden and they are opted out. Enrollment and evaluation authentication requests are rejected for opted out speakers, and opted out speakers have no voice embeddings stored in Voice ID.
* `startFraudsterRegistrationJob` - Starts a new batch fraudster registration job using provided details.
* `startSpeakerEnrollmentJob` - Starts a new batch speaker enrollment job using specified details.
* `tagResource` - Tags a Voice ID resource with the provided list of tags.
* `untagResource` - Removes specified tags from a specified Amazon Connect Voice ID resource.
* `updateDomain` - Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.
* `updateWatchlist` - Updates the specified watchlist. Every domain has a default watchlist which cannot be updated. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
