package openapisdk.models.operations;



public class AssociateEncryptionConfigResponse {
    public openapisdk.models.shared.AssociateEncryptionConfigResponse associateEncryptionConfigResponse;
    public AssociateEncryptionConfigResponse withAssociateEncryptionConfigResponse(openapisdk.models.shared.AssociateEncryptionConfigResponse associateEncryptionConfigResponse) {
        this.associateEncryptionConfigResponse = associateEncryptionConfigResponse;
        return this;
    }
    public Object clientException;
    public AssociateEncryptionConfigResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public AssociateEncryptionConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public AssociateEncryptionConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public AssociateEncryptionConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public AssociateEncryptionConfigResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateEncryptionConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public AssociateEncryptionConfigResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public AssociateEncryptionConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}