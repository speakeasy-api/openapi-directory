package openapisdk.models.operations;



public class PrivateProjectLeaveResponse {
    public String contentType;
    public PrivateProjectLeaveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorMessage errorMessage;
    public PrivateProjectLeaveResponse withErrorMessage(openapisdk.models.shared.ErrorMessage errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    public Long statusCode;
    public PrivateProjectLeaveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}