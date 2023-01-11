package openapisdk.models.operations;



public class GetDevicesInPlacementResponse {
    public String contentType;
    public GetDevicesInPlacementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDevicesInPlacementResponse getDevicesInPlacementResponse;
    public GetDevicesInPlacementResponse withGetDevicesInPlacementResponse(openapisdk.models.shared.GetDevicesInPlacementResponse getDevicesInPlacementResponse) {
        this.getDevicesInPlacementResponse = getDevicesInPlacementResponse;
        return this;
    }
    public Object internalFailureException;
    public GetDevicesInPlacementResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetDevicesInPlacementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDevicesInPlacementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetDevicesInPlacementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}