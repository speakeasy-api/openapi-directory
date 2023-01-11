package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksCreateRequest {
    public ChecksCreatePathParams pathParams;
    public ChecksCreateRequest withPathParams(ChecksCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChecksCreateRequestBody request;
    public ChecksCreateRequest withRequest(ChecksCreateRequestBody request) {
        this.request = request;
        return this;
    }
}