package openapisdk.models.operations;



public class PutRetentionConfigurationResponse {
    public String contentType;
    public PutRetentionConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public PutRetentionConfigurationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object maxNumberOfRetentionConfigurationsExceededException;
    public PutRetentionConfigurationResponse withMaxNumberOfRetentionConfigurationsExceededException(Object maxNumberOfRetentionConfigurationsExceededException) {
        this.maxNumberOfRetentionConfigurationsExceededException = maxNumberOfRetentionConfigurationsExceededException;
        return this;
    }
    public openapisdk.models.shared.PutRetentionConfigurationResponse putRetentionConfigurationResponse;
    public PutRetentionConfigurationResponse withPutRetentionConfigurationResponse(openapisdk.models.shared.PutRetentionConfigurationResponse putRetentionConfigurationResponse) {
        this.putRetentionConfigurationResponse = putRetentionConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public PutRetentionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}