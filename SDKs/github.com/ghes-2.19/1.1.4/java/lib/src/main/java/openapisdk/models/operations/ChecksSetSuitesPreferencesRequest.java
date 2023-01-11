package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChecksSetSuitesPreferencesRequest {
    public ChecksSetSuitesPreferencesPathParams pathParams;
    public ChecksSetSuitesPreferencesRequest withPathParams(ChecksSetSuitesPreferencesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChecksSetSuitesPreferencesRequestBody request;
    public ChecksSetSuitesPreferencesRequest withRequest(ChecksSetSuitesPreferencesRequestBody request) {
        this.request = request;
        return this;
    }
}