package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectEntitiesV2Request {
    public DetectEntitiesV2Headers headers;
    public DetectEntitiesV2Request withHeaders(DetectEntitiesV2Headers headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectEntitiesV2Request request;
    public DetectEntitiesV2Request withRequest(openapisdk.models.shared.DetectEntitiesV2Request request) {
        this.request = request;
        return this;
    }
}