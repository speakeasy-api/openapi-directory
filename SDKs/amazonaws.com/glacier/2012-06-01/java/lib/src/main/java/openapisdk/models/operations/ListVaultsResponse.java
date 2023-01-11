package openapisdk.models.operations;



public class ListVaultsResponse {
    public String contentType;
    public ListVaultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListVaultsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListVaultsOutput listVaultsOutput;
    public ListVaultsResponse withListVaultsOutput(openapisdk.models.shared.ListVaultsOutput listVaultsOutput) {
        this.listVaultsOutput = listVaultsOutput;
        return this;
    }
    public Object missingParameterValueException;
    public ListVaultsResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListVaultsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListVaultsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListVaultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}