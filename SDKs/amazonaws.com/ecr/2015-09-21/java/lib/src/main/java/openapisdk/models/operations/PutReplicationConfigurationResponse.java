package openapisdk.models.operations;



public class PutReplicationConfigurationResponse {
    public String contentType;
    public PutReplicationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutReplicationConfigurationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutReplicationConfigurationResponse putReplicationConfigurationResponse;
    public PutReplicationConfigurationResponse withPutReplicationConfigurationResponse(openapisdk.models.shared.PutReplicationConfigurationResponse putReplicationConfigurationResponse) {
        this.putReplicationConfigurationResponse = putReplicationConfigurationResponse;
        return this;
    }
    public Object serverException;
    public PutReplicationConfigurationResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public PutReplicationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutReplicationConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}