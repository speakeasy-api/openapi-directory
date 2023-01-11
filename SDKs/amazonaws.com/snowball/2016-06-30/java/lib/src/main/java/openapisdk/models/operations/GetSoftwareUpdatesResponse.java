package openapisdk.models.operations;



public class GetSoftwareUpdatesResponse {
    public String contentType;
    public GetSoftwareUpdatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSoftwareUpdatesResult getSoftwareUpdatesResult;
    public GetSoftwareUpdatesResponse withGetSoftwareUpdatesResult(openapisdk.models.shared.GetSoftwareUpdatesResult getSoftwareUpdatesResult) {
        this.getSoftwareUpdatesResult = getSoftwareUpdatesResult;
        return this;
    }
    public Object invalidJobStateException;
    public GetSoftwareUpdatesResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object invalidResourceException;
    public GetSoftwareUpdatesResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Long statusCode;
    public GetSoftwareUpdatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}