package openapisdk.models.operations;



public class GetConfigResponse {
    public Object cloudHsmInternalException;
    public GetConfigResponse withCloudHsmInternalException(Object cloudHsmInternalException) {
        this.cloudHsmInternalException = cloudHsmInternalException;
        return this;
    }
    public Object cloudHsmServiceException;
    public GetConfigResponse withCloudHsmServiceException(Object cloudHsmServiceException) {
        this.cloudHsmServiceException = cloudHsmServiceException;
        return this;
    }
    public String contentType;
    public GetConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetConfigResponse getConfigResponse;
    public GetConfigResponse withGetConfigResponse(openapisdk.models.shared.GetConfigResponse getConfigResponse) {
        this.getConfigResponse = getConfigResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}