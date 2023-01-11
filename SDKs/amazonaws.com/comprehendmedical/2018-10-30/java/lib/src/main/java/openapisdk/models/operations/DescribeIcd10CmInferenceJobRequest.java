package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeIcd10CmInferenceJobRequest {
    public DescribeIcd10CmInferenceJobHeaders headers;
    public DescribeIcd10CmInferenceJobRequest withHeaders(DescribeIcd10CmInferenceJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeIcd10CmInferenceJobRequest request;
    public DescribeIcd10CmInferenceJobRequest withRequest(openapisdk.models.shared.DescribeIcd10CmInferenceJobRequest request) {
        this.request = request;
        return this;
    }
}