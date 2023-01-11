package openapisdk.models.operations;



public class UpdateReplicationConfigurationTemplateResponse {
    public Object accessDeniedException;
    public UpdateReplicationConfigurationTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateReplicationConfigurationTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReplicationConfigurationTemplate replicationConfigurationTemplate;
    public UpdateReplicationConfigurationTemplateResponse withReplicationConfigurationTemplate(openapisdk.models.shared.ReplicationConfigurationTemplate replicationConfigurationTemplate) {
        this.replicationConfigurationTemplate = replicationConfigurationTemplate;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateReplicationConfigurationTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateReplicationConfigurationTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public UpdateReplicationConfigurationTemplateResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public UpdateReplicationConfigurationTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}