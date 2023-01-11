package openapisdk.models.operations;



public class ListAvailableZonesResponse {
    public Object cloudHsmInternalException;
    public ListAvailableZonesResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public ListAvailableZonesResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public ListAvailableZonesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public ListAvailableZonesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAvailableZonesResponse listAvailableZonesResponse;
    public ListAvailableZonesResponse withListAvailableZonesResponse(openapisdk.models.shared.ListAvailableZonesResponse listAvailableZonesResponse) {
        this.listAvailableZonesResponse = listAvailableZonesResponse;
        return this;
    }
    public Long statusCode;
    public ListAvailableZonesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}