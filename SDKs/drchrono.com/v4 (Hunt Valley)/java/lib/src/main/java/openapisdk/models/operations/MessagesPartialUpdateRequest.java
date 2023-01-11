package openapisdk.models.operations;



public class MessagesPartialUpdateRequest {
    public MessagesPartialUpdatePathParams pathParams;
    public MessagesPartialUpdateRequest withPathParams(MessagesPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MessagesPartialUpdateQueryParams queryParams;
    public MessagesPartialUpdateRequest withQueryParams(MessagesPartialUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public MessagesPartialUpdateSecurity security;
    public MessagesPartialUpdateRequest withSecurity(MessagesPartialUpdateSecurity security) {
        this.security = security;
        return this;
    }
}