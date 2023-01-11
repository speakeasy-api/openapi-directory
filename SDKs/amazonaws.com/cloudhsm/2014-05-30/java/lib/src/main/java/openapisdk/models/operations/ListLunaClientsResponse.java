package openapisdk.models.operations;



public class ListLunaClientsResponse {
    public Object cloudHsmInternalException;
    public ListLunaClientsResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public ListLunaClientsResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public ListLunaClientsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRequestException;
    public ListLunaClientsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListLunaClientsResponse listLunaClientsResponse;
    public ListLunaClientsResponse withListLunaClientsResponse(openapisdk.models.shared.ListLunaClientsResponse listLunaClientsResponse) {
        this.listLunaClientsResponse = listLunaClientsResponse;
        return this;
    }
    public Long statusCode;
    public ListLunaClientsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}