package openapisdk.models.operations;



public class ListRecordingConfigurationsResponse {
    public Object accessDeniedException;
    public ListRecordingConfigurationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListRecordingConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListRecordingConfigurationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListRecordingConfigurationsResponse listRecordingConfigurationsResponse;
    public ListRecordingConfigurationsResponse withListRecordingConfigurationsResponse(openapisdk.models.shared.ListRecordingConfigurationsResponse listRecordingConfigurationsResponse) {
        this.listRecordingConfigurationsResponse = listRecordingConfigurationsResponse;
        return this;
    }
    public Long statusCode;
    public ListRecordingConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListRecordingConfigurationsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}