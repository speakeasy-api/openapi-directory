package openapisdk.models.operations;



public class GetFactOnthisdayEventRequest {
    public GetFactOnthisdayEventQueryParams queryParams;
    public GetFactOnthisdayEventRequest withQueryParams(GetFactOnthisdayEventQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFactOnthisdayEventSecurity security;
    public GetFactOnthisdayEventRequest withSecurity(GetFactOnthisdayEventSecurity security) {
        this.security = security;
        return this;
    }
}