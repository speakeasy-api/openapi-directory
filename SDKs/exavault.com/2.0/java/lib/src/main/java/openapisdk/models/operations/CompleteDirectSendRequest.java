package openapisdk.models.operations;



public class CompleteDirectSendRequest {
    public CompleteDirectSendPathParams pathParams;
    public CompleteDirectSendRequest withPathParams(CompleteDirectSendPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompleteDirectSendHeaders headers;
    public CompleteDirectSendRequest withHeaders(CompleteDirectSendHeaders headers) {
        this.headers = headers;
        return this;
    }
}