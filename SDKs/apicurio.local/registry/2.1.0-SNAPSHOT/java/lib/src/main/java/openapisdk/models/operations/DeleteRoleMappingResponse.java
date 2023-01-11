package openapisdk.models.operations;



public class DeleteRoleMappingResponse {
    public String contentType;
    public DeleteRoleMappingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteRoleMappingResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DeleteRoleMappingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}