package openapisdk.models.operations;



public class SendWelcomeEmailRequest {
    public SendWelcomeEmailPathParams pathParams;
    public SendWelcomeEmailRequest withPathParams(SendWelcomeEmailPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SendWelcomeEmailHeaders headers;
    public SendWelcomeEmailRequest withHeaders(SendWelcomeEmailHeaders headers) {
        this.headers = headers;
        return this;
    }
}