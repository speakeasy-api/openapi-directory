package openapisdk.models.operations;



public class CreateRoleMappingResponse {
    public String contentType;
    public CreateRoleMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public CreateRoleMappingResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public CreateRoleMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}