package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PollForThirdPartyJobsRequest {
    public PollForThirdPartyJobsHeaders headers;
    public PollForThirdPartyJobsRequest withHeaders(PollForThirdPartyJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PollForThirdPartyJobsInput request;
    public PollForThirdPartyJobsRequest withRequest(openapisdk.models.shared.PollForThirdPartyJobsInput request) {
        this.request = request;
        return this;
    }
}