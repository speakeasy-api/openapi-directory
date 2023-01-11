package openapisdk.models.operations;



public class UpdateReplicationConfigurationResponse {
    public Object accessDeniedException;
    public UpdateReplicationConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public UpdateReplicationConfigurationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateReplicationConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReplicationConfiguration replicationConfiguration;
    public UpdateReplicationConfigurationResponse withReplicationConfiguration(openapisdk.models.shared.ReplicationConfiguration replicationConfiguration) {
        this.replicationConfiguration = replicationConfiguration;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateReplicationConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateReplicationConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object uninitializedAccountException;
    public UpdateReplicationConfigurationResponse withUninitializedAccountException(Object uninitializedAccountException) {
        this.uninitializedAccountException = uninitializedAccountException;
        return this;
    }
    public Object validationException;
    public UpdateReplicationConfigurationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}