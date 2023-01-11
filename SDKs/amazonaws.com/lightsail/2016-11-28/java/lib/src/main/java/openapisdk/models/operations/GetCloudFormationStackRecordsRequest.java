package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCloudFormationStackRecordsRequest {
    public GetCloudFormationStackRecordsHeaders headers;
    public GetCloudFormationStackRecordsRequest withHeaders(GetCloudFormationStackRecordsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetCloudFormationStackRecordsRequest request;
    public GetCloudFormationStackRecordsRequest withRequest(openapisdk.models.shared.GetCloudFormationStackRecordsRequest request) {
        this.request = request;
        return this;
    }
}