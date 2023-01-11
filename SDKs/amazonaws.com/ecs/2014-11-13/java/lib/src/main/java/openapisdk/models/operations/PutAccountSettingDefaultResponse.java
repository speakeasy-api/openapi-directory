package openapisdk.models.operations;



public class PutAccountSettingDefaultResponse {
    public Object clientException;
    public PutAccountSettingDefaultResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public PutAccountSettingDefaultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutAccountSettingDefaultResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutAccountSettingDefaultResponse putAccountSettingDefaultResponse;
    public PutAccountSettingDefaultResponse withPutAccountSettingDefaultResponse(openapisdk.models.shared.PutAccountSettingDefaultResponse putAccountSettingDefaultResponse) {
        this.putAccountSettingDefaultResponse = putAccountSettingDefaultResponse;
        return this;
    }
    public Object serverException;
    public PutAccountSettingDefaultResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public PutAccountSettingDefaultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}