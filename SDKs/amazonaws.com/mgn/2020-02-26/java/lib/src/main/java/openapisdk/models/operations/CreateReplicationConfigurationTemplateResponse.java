package openapisdk.models.operations;



public class CreateReplicationConfigurationTemplateResponse {
    public Object accessDeniedException;
    public CreateReplicationConfigurationTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateReplicationConfigurationTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReplicationConfigurationTemplate replicationConfigurationTemplate;
    public CreateReplicationConfigurationTemplateResponse withReplicationConfigurationTemplate(openapisdk.models.shared.ReplicationConfigurationTemplate replicationConfigurationTemplate) {
        this.replicationConfigurationTemplate = replicationConfigurationTemplate;
        return this;
    }
    public Long statusCode;
    public CreateReplicationConfigurationTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public CreateReplicationConfigurationTemplateResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public CreateReplicationConfigurationTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}