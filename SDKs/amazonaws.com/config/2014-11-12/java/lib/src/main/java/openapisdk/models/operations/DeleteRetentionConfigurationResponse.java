package openapisdk.models.operations;



public class DeleteRetentionConfigurationResponse {
    public String contentType;
    public DeleteRetentionConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public DeleteRetentionConfigurationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchRetentionConfigurationException;
    public DeleteRetentionConfigurationResponse withNoSuchRetentionConfigurationException(Object noSuchRetentionConfigurationException) {
        this.noSuchRetentionConfigurationException = noSuchRetentionConfigurationException;
        return this;
    }
    public Long statusCode;
    public DeleteRetentionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}