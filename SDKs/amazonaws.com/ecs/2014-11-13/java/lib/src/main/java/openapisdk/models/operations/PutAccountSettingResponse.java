package openapisdk.models.operations;



public class PutAccountSettingResponse {
    public Object clientException;
    public PutAccountSettingResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public PutAccountSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutAccountSettingResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutAccountSettingResponse putAccountSettingResponse;
    public PutAccountSettingResponse withPutAccountSettingResponse(openapisdk.models.shared.PutAccountSettingResponse putAccountSettingResponse) {
        this.putAccountSettingResponse = putAccountSettingResponse;
        return this;
    }
    public Object serverException;
    public PutAccountSettingResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public PutAccountSettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}