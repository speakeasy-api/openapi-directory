package openapisdk.models.operations;



public class PurchaseProvisionedCapacityResponse {
    public String contentType;
    public PurchaseProvisionedCapacityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public PurchaseProvisionedCapacityResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object limitExceededException;
    public PurchaseProvisionedCapacityResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object missingParameterValueException;
    public PurchaseProvisionedCapacityResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public java.util.Map<String, Object> purchaseProvisionedCapacityOutput;
    public PurchaseProvisionedCapacityResponse withPurchaseProvisionedCapacityOutput(java.util.Map<String, Object> purchaseProvisionedCapacityOutput) {
        this.purchaseProvisionedCapacityOutput = purchaseProvisionedCapacityOutput;
        return this;
    }
    public Object serviceUnavailableException;
    public PurchaseProvisionedCapacityResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public PurchaseProvisionedCapacityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}