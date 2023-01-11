package openapisdk.models.operations;



public class PutDestinationResponse {
    public String contentType;
    public PutDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutDestinationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object operationAbortedException;
    public PutDestinationResponse withOperationAbortedException(Object operationAbortedException) {
        this.operationAbortedException = operationAbortedException;
        return this;
    }
    public openapisdk.models.shared.PutDestinationResponse putDestinationResponse;
    public PutDestinationResponse withPutDestinationResponse(openapisdk.models.shared.PutDestinationResponse putDestinationResponse) {
        this.putDestinationResponse = putDestinationResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public PutDestinationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PutDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}