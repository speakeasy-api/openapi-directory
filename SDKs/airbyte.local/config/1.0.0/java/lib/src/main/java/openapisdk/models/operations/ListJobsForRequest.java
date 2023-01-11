package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobsForRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.JobListRequestBody request;
    public ListJobsForRequest withRequest(openapisdk.models.shared.JobListRequestBody request) {
        this.request = request;
        return this;
    }
}