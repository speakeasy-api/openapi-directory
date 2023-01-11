package openapisdk.models.operations;



public class GetSuppressedDestinationRequest {
    public GetSuppressedDestinationPathParams pathParams;
    public GetSuppressedDestinationRequest withPathParams(GetSuppressedDestinationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetSuppressedDestinationHeaders headers;
    public GetSuppressedDestinationRequest withHeaders(GetSuppressedDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
}