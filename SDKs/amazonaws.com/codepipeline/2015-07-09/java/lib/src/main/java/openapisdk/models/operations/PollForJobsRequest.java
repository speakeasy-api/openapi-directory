package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PollForJobsRequest {
    public PollForJobsHeaders headers;
    public PollForJobsRequest withHeaders(PollForJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PollForJobsInput request;
    public PollForJobsRequest withRequest(openapisdk.models.shared.PollForJobsInput request) {
        this.request = request;
        return this;
    }
}