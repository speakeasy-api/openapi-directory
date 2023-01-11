package openapisdk.models.operations;



public class PutRepositoryTriggersResponse {
    public String contentType;
    public PutRepositoryTriggersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public PutRepositoryTriggersResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public PutRepositoryTriggersResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public PutRepositoryTriggersResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public PutRepositoryTriggersResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public PutRepositoryTriggersResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public PutRepositoryTriggersResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object invalidRepositoryTriggerBranchNameException;
    public PutRepositoryTriggersResponse withInvalidRepositoryTriggerBranchNameException(Object invalidRepositoryTriggerBranchNameException) {
        this.invalidRepositoryTriggerBranchNameException = invalidRepositoryTriggerBranchNameException;
        return this;
    }
    public Object invalidRepositoryTriggerCustomDataException;
    public PutRepositoryTriggersResponse withInvalidRepositoryTriggerCustomDataException(Object invalidRepositoryTriggerCustomDataException) {
        this.invalidRepositoryTriggerCustomDataException = invalidRepositoryTriggerCustomDataException;
        return this;
    }
    public Object invalidRepositoryTriggerDestinationArnException;
    public PutRepositoryTriggersResponse withInvalidRepositoryTriggerDestinationArnException(Object invalidRepositoryTriggerDestinationArnException) {
        this.invalidRepositoryTriggerDestinationArnException = invalidRepositoryTriggerDestinationArnException;
        return this;
    }
    public Object invalidRepositoryTriggerEventsException;
    public PutRepositoryTriggersResponse withInvalidRepositoryTriggerEventsException(Object invalidRepositoryTriggerEventsException) {
        this.invalidRepositoryTriggerEventsException = invalidRepositoryTriggerEventsException;
        return this;
    }
    public Object invalidRepositoryTriggerNameException;
    public PutRepositoryTriggersResponse withInvalidRepositoryTriggerNameException(Object invalidRepositoryTriggerNameException) {
        this.invalidRepositoryTriggerNameException = invalidRepositoryTriggerNameException;
        return this;
    }
    public Object invalidRepositoryTriggerRegionException;
    public PutRepositoryTriggersResponse withInvalidRepositoryTriggerRegionException(Object invalidRepositoryTriggerRegionException) {
        this.invalidRepositoryTriggerRegionException = invalidRepositoryTriggerRegionException;
        return this;
    }
    public Object maximumBranchesExceededException;
    public PutRepositoryTriggersResponse withMaximumBranchesExceededException(Object maximumBranchesExceededException) {
        this.maximumBranchesExceededException = maximumBranchesExceededException;
        return this;
    }
    public Object maximumRepositoryTriggersExceededException;
    public PutRepositoryTriggersResponse withMaximumRepositoryTriggersExceededException(Object maximumRepositoryTriggersExceededException) {
        this.maximumRepositoryTriggersExceededException = maximumRepositoryTriggersExceededException;
        return this;
    }
    public openapisdk.models.shared.PutRepositoryTriggersOutput putRepositoryTriggersOutput;
    public PutRepositoryTriggersResponse withPutRepositoryTriggersOutput(openapisdk.models.shared.PutRepositoryTriggersOutput putRepositoryTriggersOutput) {
        this.putRepositoryTriggersOutput = putRepositoryTriggersOutput;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public PutRepositoryTriggersResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public PutRepositoryTriggersResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Object repositoryTriggerBranchNameListRequiredException;
    public PutRepositoryTriggersResponse withRepositoryTriggerBranchNameListRequiredException(Object repositoryTriggerBranchNameListRequiredException) {
        this.repositoryTriggerBranchNameListRequiredException = repositoryTriggerBranchNameListRequiredException;
        return this;
    }
    public Object repositoryTriggerDestinationArnRequiredException;
    public PutRepositoryTriggersResponse withRepositoryTriggerDestinationArnRequiredException(Object repositoryTriggerDestinationArnRequiredException) {
        this.repositoryTriggerDestinationArnRequiredException = repositoryTriggerDestinationArnRequiredException;
        return this;
    }
    public Object repositoryTriggerEventsListRequiredException;
    public PutRepositoryTriggersResponse withRepositoryTriggerEventsListRequiredException(Object repositoryTriggerEventsListRequiredException) {
        this.repositoryTriggerEventsListRequiredException = repositoryTriggerEventsListRequiredException;
        return this;
    }
    public Object repositoryTriggerNameRequiredException;
    public PutRepositoryTriggersResponse withRepositoryTriggerNameRequiredException(Object repositoryTriggerNameRequiredException) {
        this.repositoryTriggerNameRequiredException = repositoryTriggerNameRequiredException;
        return this;
    }
    public Object repositoryTriggersListRequiredException;
    public PutRepositoryTriggersResponse withRepositoryTriggersListRequiredException(Object repositoryTriggersListRequiredException) {
        this.repositoryTriggersListRequiredException = repositoryTriggersListRequiredException;
        return this;
    }
    public Long statusCode;
    public PutRepositoryTriggersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}