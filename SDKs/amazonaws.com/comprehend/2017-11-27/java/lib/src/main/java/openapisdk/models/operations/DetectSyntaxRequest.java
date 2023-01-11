package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectSyntaxRequest {
    public DetectSyntaxHeaders headers;
    public DetectSyntaxRequest withHeaders(DetectSyntaxHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectSyntaxRequest request;
    public DetectSyntaxRequest withRequest(openapisdk.models.shared.DetectSyntaxRequest request) {
        this.request = request;
        return this;
    }
}