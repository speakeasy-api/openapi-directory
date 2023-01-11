package openapisdk.models.operations;



public class GetRecordingConfigurationResponse {
    public Object accessDeniedException;
    public GetRecordingConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetRecordingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRecordingConfigurationResponse getRecordingConfigurationResponse;
    public GetRecordingConfigurationResponse withGetRecordingConfigurationResponse(openapisdk.models.shared.GetRecordingConfigurationResponse getRecordingConfigurationResponse) {
        this.getRecordingConfigurationResponse = getRecordingConfigurationResponse;
        return this;
    }
    public Object internalServerException;
    public GetRecordingConfigurationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetRecordingConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetRecordingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetRecordingConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}