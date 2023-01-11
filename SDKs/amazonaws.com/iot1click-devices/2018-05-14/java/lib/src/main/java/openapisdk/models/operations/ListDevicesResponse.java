package openapisdk.models.operations;



public class ListDevicesResponse {
    public String contentType;
    public ListDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDevicesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDevicesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDevicesResponse listDevicesResponse;
    public ListDevicesResponse withListDevicesResponse(openapisdk.models.shared.ListDevicesResponse listDevicesResponse) {
        this.listDevicesResponse = listDevicesResponse;
        return this;
    }
    public Object rangeNotSatisfiableException;
    public ListDevicesResponse withRangeNotSatisfiableException(Object rangeNotSatisfiableException) {
        this.rangeNotSatisfiableException = rangeNotSatisfiableException;
        return this;
    }
    public Long statusCode;
    public ListDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}