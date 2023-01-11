package openapisdk.models.operations;



public class GetFolderResponse {
    public Object commitDoesNotExistException;
    public GetFolderResponse withCommitDoesNotExistException(Object commitDoesNotExistException) {
        this.commitDoesNotExistException = commitDoesNotExistException;
        return this;
    }
    public String contentType;
    public GetFolderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetFolderResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetFolderResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetFolderResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetFolderResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetFolderResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object folderDoesNotExistException;
    public GetFolderResponse withFolderDoesNotExistException(Object folderDoesNotExistException) {
        this.folderDoesNotExistException = folderDoesNotExistException;
        return this;
    }
    public openapisdk.models.shared.GetFolderOutput getFolderOutput;
    public GetFolderResponse withGetFolderOutput(openapisdk.models.shared.GetFolderOutput getFolderOutput) {
        this.getFolderOutput = getFolderOutput;
        return this;
    }
    public Object invalidCommitException;
    public GetFolderResponse withInvalidCommitException(Object invalidCommitException) {
        this.invalidCommitException = invalidCommitException;
        return this;
    }
    public Object invalidPathException;
    public GetFolderResponse withInvalidPathException(Object invalidPathException) {
        this.invalidPathException = invalidPathException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public GetFolderResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object pathRequiredException;
    public GetFolderResponse withPathRequiredException(Object pathRequiredException) {
        this.pathRequiredException = pathRequiredException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public GetFolderResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public GetFolderResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public GetFolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}