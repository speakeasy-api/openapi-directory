package openapisdk.models.operations;



public class ListPartsResponse {
    public String contentType;
    public ListPartsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListPartsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListPartsOutput listPartsOutput;
    public ListPartsResponse withListPartsOutput(openapisdk.models.shared.ListPartsOutput listPartsOutput) {
        this.listPartsOutput = listPartsOutput;
        return this;
    }
    public Object missingParameterValueException;
    public ListPartsResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPartsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListPartsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListPartsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}