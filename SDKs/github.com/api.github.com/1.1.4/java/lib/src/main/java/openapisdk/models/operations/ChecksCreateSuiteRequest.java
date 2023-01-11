package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksCreateSuiteRequest {
    public ChecksCreateSuitePathParams pathParams;
    public ChecksCreateSuiteRequest withPathParams(ChecksCreateSuitePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChecksCreateSuiteRequestBody request;
    public ChecksCreateSuiteRequest withRequest(ChecksCreateSuiteRequestBody request) {
        this.request = request;
        return this;
    }
}