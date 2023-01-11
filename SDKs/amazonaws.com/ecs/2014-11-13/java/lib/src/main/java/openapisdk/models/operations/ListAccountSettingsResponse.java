package openapisdk.models.operations;



public class ListAccountSettingsResponse {
    public Object clientException;
    public ListAccountSettingsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListAccountSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListAccountSettingsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListAccountSettingsResponse listAccountSettingsResponse;
    public ListAccountSettingsResponse withListAccountSettingsResponse(openapisdk.models.shared.ListAccountSettingsResponse listAccountSettingsResponse) {
        this.listAccountSettingsResponse = listAccountSettingsResponse;
        return this;
    }
    public Object serverException;
    public ListAccountSettingsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public ListAccountSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}