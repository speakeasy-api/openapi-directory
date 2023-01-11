package openapisdk.models.operations;



public class ListProvisionedCapacityResponse {
    public String contentType;
    public ListProvisionedCapacityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListProvisionedCapacityResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListProvisionedCapacityOutput listProvisionedCapacityOutput;
    public ListProvisionedCapacityResponse withListProvisionedCapacityOutput(openapisdk.models.shared.ListProvisionedCapacityOutput listProvisionedCapacityOutput) {
        this.listProvisionedCapacityOutput = listProvisionedCapacityOutput;
        return this;
    }
    public Object missingParameterValueException;
    public ListProvisionedCapacityResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListProvisionedCapacityResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListProvisionedCapacityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}