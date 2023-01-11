package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SrcSearchlyApiV1ControllersSimilarityByContentRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SrcSearchlyApiV1ControllersSimilarityByContentRequestBody request;
    public SrcSearchlyApiV1ControllersSimilarityByContentRequest withRequest(SrcSearchlyApiV1ControllersSimilarityByContentRequestBody request) {
        this.request = request;
        return this;
    }
}