package openapisdk.models.operations;



public class GetBlobResponse {
    public Object blobIdDoesNotExistException;
    public GetBlobResponse withBlobIdDoesNotExistException(Object blobIdDoesNotExistException) {
        this.blobIdDoesNotExistException = blobIdDoesNotExistException;
        return this;
    }
    public Object blobIdRequiredException;
    public GetBlobResponse withBlobIdRequiredException(Object blobIdRequiredException) {
        this.blobIdRequiredException = blobIdRequiredException;
        return this;
    }
    public String contentType;
    public GetBlobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetBlobResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetBlobResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetBlobResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetBlobResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetBlobResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object fileTooLargeException;
    public GetBlobResponse withFileTooLargeException(Object fileTooLargeException) {
        this.fileTooLargeException = fileTooLargeException;
        return this;
    }
    public openapisdk.models.shared.GetBlobOutput getBlobOutput;
    public GetBlobResponse withGetBlobOutput(openapisdk.models.shared.GetBlobOutput getBlobOutput) {
        this.getBlobOutput = getBlobOutput;
        return this;
    }
    public Object invalidBlobIdException;
    public GetBlobResponse withInvalidBlobIdException(Object invalidBlobIdException) {
        this.invalidBlobIdException = invalidBlobIdException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public GetBlobResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public GetBlobResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public GetBlobResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public GetBlobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}