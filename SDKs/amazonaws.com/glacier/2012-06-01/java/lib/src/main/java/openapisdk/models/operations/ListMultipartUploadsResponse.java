package openapisdk.models.operations;



public class ListMultipartUploadsResponse {
    public String contentType;
    public ListMultipartUploadsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListMultipartUploadsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListMultipartUploadsOutput listMultipartUploadsOutput;
    public ListMultipartUploadsResponse withListMultipartUploadsOutput(openapisdk.models.shared.ListMultipartUploadsOutput listMultipartUploadsOutput) {
        this.listMultipartUploadsOutput = listMultipartUploadsOutput;
        return this;
    }
    public Object missingParameterValueException;
    public ListMultipartUploadsResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListMultipartUploadsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListMultipartUploadsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListMultipartUploadsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}