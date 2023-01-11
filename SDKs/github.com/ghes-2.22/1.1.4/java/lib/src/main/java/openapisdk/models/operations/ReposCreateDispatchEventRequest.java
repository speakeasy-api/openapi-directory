package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposCreateDispatchEventRequest {
    public ReposCreateDispatchEventPathParams pathParams;
    public ReposCreateDispatchEventRequest withPathParams(ReposCreateDispatchEventPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposCreateDispatchEventRequestBody request;
    public ReposCreateDispatchEventRequest withRequest(ReposCreateDispatchEventRequestBody request) {
        this.request = request;
        return this;
    }
}