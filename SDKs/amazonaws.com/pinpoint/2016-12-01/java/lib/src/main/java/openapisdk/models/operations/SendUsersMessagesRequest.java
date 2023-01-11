package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendUsersMessagesRequest {
    public SendUsersMessagesPathParams pathParams;
    public SendUsersMessagesRequest withPathParams(SendUsersMessagesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SendUsersMessagesHeaders headers;
    public SendUsersMessagesRequest withHeaders(SendUsersMessagesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendUsersMessagesRequestBody request;
    public SendUsersMessagesRequest withRequest(SendUsersMessagesRequestBody request) {
        this.request = request;
        return this;
    }
}