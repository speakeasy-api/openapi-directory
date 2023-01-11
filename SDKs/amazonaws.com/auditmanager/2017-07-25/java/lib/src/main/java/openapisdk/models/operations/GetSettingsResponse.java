package openapisdk.models.operations;



public class GetSettingsResponse {
    public Object accessDeniedException;
    public GetSettingsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSettingsResponse getSettingsResponse;
    public GetSettingsResponse withGetSettingsResponse(openapisdk.models.shared.GetSettingsResponse getSettingsResponse) {
        this.getSettingsResponse = getSettingsResponse;
        return this;
    }
    public Object internalServerException;
    public GetSettingsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public GetSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}