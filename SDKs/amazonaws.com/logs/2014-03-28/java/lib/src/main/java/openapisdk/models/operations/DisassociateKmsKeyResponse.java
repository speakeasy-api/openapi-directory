package openapisdk.models.operations;



public class DisassociateKmsKeyResponse {
    public String contentType;
    public DisassociateKmsKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public DisassociateKmsKeyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object operationAbortedException;
    public DisassociateKmsKeyResponse withOperationAbortedException(Object operationAbortedException) {
        this.operationAbortedException = operationAbortedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisassociateKmsKeyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DisassociateKmsKeyResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DisassociateKmsKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}