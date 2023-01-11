package openapisdk.models.operations;



public class GetFileResponse {
    public Object commitDoesNotExistException;
    public GetFileResponse withCommitDoesNotExistException(Object commitDoesNotExistException) {
        this.commitDoesNotExistException = commitDoesNotExistException;
        return this;
    }
    public String contentType;
    public GetFileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetFileResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetFileResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetFileResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetFileResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetFileResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object fileDoesNotExistException;
    public GetFileResponse withFileDoesNotExistException(Object fileDoesNotExistException) {
        this.fileDoesNotExistException = fileDoesNotExistException;
        return this;
    }
    public Object fileTooLargeException;
    public GetFileResponse withFileTooLargeException(Object fileTooLargeException) {
        this.fileTooLargeException = fileTooLargeException;
        return this;
    }
    public openapisdk.models.shared.GetFileOutput getFileOutput;
    public GetFileResponse withGetFileOutput(openapisdk.models.shared.GetFileOutput getFileOutput) {
        this.getFileOutput = getFileOutput;
        return this;
    }
    public Object invalidCommitException;
    public GetFileResponse withInvalidCommitException(Object invalidCommitException) {
        this.invalidCommitException = invalidCommitException;
        return this;
    }
    public Object invalidPathException;
    public GetFileResponse withInvalidPathException(Object invalidPathException) {
        this.invalidPathException = invalidPathException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public GetFileResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object pathRequiredException;
    public GetFileResponse withPathRequiredException(Object pathRequiredException) {
        this.pathRequiredException = pathRequiredException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public GetFileResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public GetFileResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public GetFileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}