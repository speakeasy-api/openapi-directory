package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAwsDefaultServiceQuotaRequest {
    public GetAwsDefaultServiceQuotaHeaders headers;
    public GetAwsDefaultServiceQuotaRequest withHeaders(GetAwsDefaultServiceQuotaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAwsDefaultServiceQuotaRequest request;
    public GetAwsDefaultServiceQuotaRequest withRequest(openapisdk.models.shared.GetAwsDefaultServiceQuotaRequest request) {
        this.request = request;
        return this;
    }
}