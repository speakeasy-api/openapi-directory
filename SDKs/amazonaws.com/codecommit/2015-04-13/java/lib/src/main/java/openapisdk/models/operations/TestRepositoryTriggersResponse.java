package openapisdk.models.operations;



public class TestRepositoryTriggersResponse {
    public String contentType;
    public TestRepositoryTriggersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public TestRepositoryTriggersResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public TestRepositoryTriggersResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public TestRepositoryTriggersResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public TestRepositoryTriggersResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public TestRepositoryTriggersResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public TestRepositoryTriggersResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object invalidRepositoryTriggerBranchNameException;
    public TestRepositoryTriggersResponse withInvalidRepositoryTriggerBranchNameException(Object invalidRepositoryTriggerBranchNameException) {
        this.invalidRepositoryTriggerBranchNameException = invalidRepositoryTriggerBranchNameException;
        return this;
    }
    public Object invalidRepositoryTriggerCustomDataException;
    public TestRepositoryTriggersResponse withInvalidRepositoryTriggerCustomDataException(Object invalidRepositoryTriggerCustomDataException) {
        this.invalidRepositoryTriggerCustomDataException = invalidRepositoryTriggerCustomDataException;
        return this;
    }
    public Object invalidRepositoryTriggerDestinationArnException;
    public TestRepositoryTriggersResponse withInvalidRepositoryTriggerDestinationArnException(Object invalidRepositoryTriggerDestinationArnException) {
        this.invalidRepositoryTriggerDestinationArnException = invalidRepositoryTriggerDestinationArnException;
        return this;
    }
    public Object invalidRepositoryTriggerEventsException;
    public TestRepositoryTriggersResponse withInvalidRepositoryTriggerEventsException(Object invalidRepositoryTriggerEventsException) {
        this.invalidRepositoryTriggerEventsException = invalidRepositoryTriggerEventsException;
        return this;
    }
    public Object invalidRepositoryTriggerNameException;
    public TestRepositoryTriggersResponse withInvalidRepositoryTriggerNameException(Object invalidRepositoryTriggerNameException) {
        this.invalidRepositoryTriggerNameException = invalidRepositoryTriggerNameException;
        return this;
    }
    public Object invalidRepositoryTriggerRegionException;
    public TestRepositoryTriggersResponse withInvalidRepositoryTriggerRegionException(Object invalidRepositoryTriggerRegionException) {
        this.invalidRepositoryTriggerRegionException = invalidRepositoryTriggerRegionException;
        return this;
    }
    public Object maximumBranchesExceededException;
    public TestRepositoryTriggersResponse withMaximumBranchesExceededException(Object maximumBranchesExceededException) {
        this.maximumBranchesExceededException = maximumBranchesExceededException;
        return this;
    }
    public Object maximumRepositoryTriggersExceededException;
    public TestRepositoryTriggersResponse withMaximumRepositoryTriggersExceededException(Object maximumRepositoryTriggersExceededException) {
        this.maximumRepositoryTriggersExceededException = maximumRepositoryTriggersExceededException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public TestRepositoryTriggersResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public TestRepositoryTriggersResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Object repositoryTriggerBranchNameListRequiredException;
    public TestRepositoryTriggersResponse withRepositoryTriggerBranchNameListRequiredException(Object repositoryTriggerBranchNameListRequiredException) {
        this.repositoryTriggerBranchNameListRequiredException = repositoryTriggerBranchNameListRequiredException;
        return this;
    }
    public Object repositoryTriggerDestinationArnRequiredException;
    public TestRepositoryTriggersResponse withRepositoryTriggerDestinationArnRequiredException(Object repositoryTriggerDestinationArnRequiredException) {
        this.repositoryTriggerDestinationArnRequiredException = repositoryTriggerDestinationArnRequiredException;
        return this;
    }
    public Object repositoryTriggerEventsListRequiredException;
    public TestRepositoryTriggersResponse withRepositoryTriggerEventsListRequiredException(Object repositoryTriggerEventsListRequiredException) {
        this.repositoryTriggerEventsListRequiredException = repositoryTriggerEventsListRequiredException;
        return this;
    }
    public Object repositoryTriggerNameRequiredException;
    public TestRepositoryTriggersResponse withRepositoryTriggerNameRequiredException(Object repositoryTriggerNameRequiredException) {
        this.repositoryTriggerNameRequiredException = repositoryTriggerNameRequiredException;
        return this;
    }
    public Object repositoryTriggersListRequiredException;
    public TestRepositoryTriggersResponse withRepositoryTriggersListRequiredException(Object repositoryTriggersListRequiredException) {
        this.repositoryTriggersListRequiredException = repositoryTriggersListRequiredException;
        return this;
    }
    public Long statusCode;
    public TestRepositoryTriggersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestRepositoryTriggersOutput testRepositoryTriggersOutput;
    public TestRepositoryTriggersResponse withTestRepositoryTriggersOutput(openapisdk.models.shared.TestRepositoryTriggersOutput testRepositoryTriggersOutput) {
        this.testRepositoryTriggersOutput = testRepositoryTriggersOutput;
        return this;
    }
}