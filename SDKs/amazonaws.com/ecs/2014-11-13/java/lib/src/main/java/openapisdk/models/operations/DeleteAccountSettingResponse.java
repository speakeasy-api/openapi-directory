package openapisdk.models.operations;



public class DeleteAccountSettingResponse {
    public Object clientException;
    public DeleteAccountSettingResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteAccountSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteAccountSettingResponse deleteAccountSettingResponse;
    public DeleteAccountSettingResponse withDeleteAccountSettingResponse(openapisdk.models.shared.DeleteAccountSettingResponse deleteAccountSettingResponse) {
        this.deleteAccountSettingResponse = deleteAccountSettingResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteAccountSettingResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DeleteAccountSettingResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeleteAccountSettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}