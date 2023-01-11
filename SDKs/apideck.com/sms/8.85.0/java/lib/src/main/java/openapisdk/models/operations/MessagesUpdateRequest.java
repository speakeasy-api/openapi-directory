package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesUpdateRequest {
    public MessagesUpdatePathParams pathParams;
    public MessagesUpdateRequest withPathParams(MessagesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MessagesUpdateQueryParams queryParams;
    public MessagesUpdateRequest withQueryParams(MessagesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MessagesUpdateHeaders headers;
    public MessagesUpdateRequest withHeaders(MessagesUpdateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.MessageInput request;
    public MessagesUpdateRequest withRequest(openapisdk.models.shared.MessageInput request) {
        this.request = request;
        return this;
    }
    public MessagesUpdateSecurity security;
    public MessagesUpdateRequest withSecurity(MessagesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}