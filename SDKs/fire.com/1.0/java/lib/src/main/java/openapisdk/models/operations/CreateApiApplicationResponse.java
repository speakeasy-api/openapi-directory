package openapisdk.models.operations;



public class CreateApiApplicationResponse {
    public CreateApiApplicationApiApplication apiApplication;
    public CreateApiApplicationResponse withApiApplication(CreateApiApplicationApiApplication apiApplication) {
        this.apiApplication = apiApplication;
        return this;
    }
    public String contentType;
    public CreateApiApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateApiApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}