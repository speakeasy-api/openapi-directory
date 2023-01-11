package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIcd10CmInferenceJobsRequest {
    public ListIcd10CmInferenceJobsHeaders headers;
    public ListIcd10CmInferenceJobsRequest withHeaders(ListIcd10CmInferenceJobsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListIcd10CmInferenceJobsRequest request;
    public ListIcd10CmInferenceJobsRequest withRequest(openapisdk.models.shared.ListIcd10CmInferenceJobsRequest request) {
        this.request = request;
        return this;
    }
}