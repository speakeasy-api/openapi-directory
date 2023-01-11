package openapisdk.models.operations;



public class UpdateAliasResponse {
    public String contentType;
    public UpdateAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateAliasResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateAliasResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public UpdateAliasResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateAliasResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateAliasOutput updateAliasOutput;
    public UpdateAliasResponse withUpdateAliasOutput(openapisdk.models.shared.UpdateAliasOutput updateAliasOutput) {
        this.updateAliasOutput = updateAliasOutput;
        return this;
    }
}