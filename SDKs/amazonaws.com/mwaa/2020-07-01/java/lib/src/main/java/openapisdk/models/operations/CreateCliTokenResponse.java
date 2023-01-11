package openapisdk.models.operations;



public class CreateCliTokenResponse {
    public String contentType;
    public CreateCliTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCliTokenResponse createCliTokenResponse;
    public CreateCliTokenResponse withCreateCliTokenResponse(openapisdk.models.shared.CreateCliTokenResponse createCliTokenResponse) {
        this.createCliTokenResponse = createCliTokenResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateCliTokenResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateCliTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}