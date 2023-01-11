package openapisdk.models.operations;



public class RegisterClientResponse {
    public String contentType;
    public RegisterClientResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public RegisterClientResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidClientMetadataException;
    public RegisterClientResponse withInvalidClientMetadataException(Object invalidClientMetadataException) {
        this.invalidClientMetadataException = invalidClientMetadataException;
        return this;
    }
    public Object invalidRequestException;
    public RegisterClientResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidScopeException;
    public RegisterClientResponse withInvalidScopeException(Object invalidScopeException) {
        this.invalidScopeException = invalidScopeException;
        return this;
    }
    public openapisdk.models.shared.RegisterClientResponse registerClientResponse;
    public RegisterClientResponse withRegisterClientResponse(openapisdk.models.shared.RegisterClientResponse registerClientResponse) {
        this.registerClientResponse = registerClientResponse;
        return this;
    }
    public Long statusCode;
    public RegisterClientResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}