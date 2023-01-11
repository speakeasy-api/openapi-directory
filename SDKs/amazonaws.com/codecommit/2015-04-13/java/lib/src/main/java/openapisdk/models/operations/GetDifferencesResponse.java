package openapisdk.models.operations;



public class GetDifferencesResponse {
    public Object commitDoesNotExistException;
    public GetDifferencesResponse withCommitDoesNotExistException(Object commitDoesNotExistException) {
        this.commitDoesNotExistException = commitDoesNotExistException;
        return this;
    }
    public Object commitRequiredException;
    public GetDifferencesResponse withCommitRequiredException(Object commitRequiredException) {
        this.commitRequiredException = commitRequiredException;
        return this;
    }
    public String contentType;
    public GetDifferencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetDifferencesResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetDifferencesResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetDifferencesResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetDifferencesResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetDifferencesResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.GetDifferencesOutput getDifferencesOutput;
    public GetDifferencesResponse withGetDifferencesOutput(openapisdk.models.shared.GetDifferencesOutput getDifferencesOutput) {
        this.getDifferencesOutput = getDifferencesOutput;
        return this;
    }
    public Object invalidCommitException;
    public GetDifferencesResponse withInvalidCommitException(Object invalidCommitException) {
        this.invalidCommitException = invalidCommitException;
        return this;
    }
    public Object invalidCommitIdException;
    public GetDifferencesResponse withInvalidCommitIdException(Object invalidCommitIdException) {
        this.invalidCommitIdException = invalidCommitIdException;
        return this;
    }
    public Object invalidContinuationTokenException;
    public GetDifferencesResponse withInvalidContinuationTokenException(Object invalidContinuationTokenException) {
        this.invalidContinuationTokenException = invalidContinuationTokenException;
        return this;
    }
    public Object invalidMaxResultsException;
    public GetDifferencesResponse withInvalidMaxResultsException(Object invalidMaxResultsException) {
        this.invalidMaxResultsException = invalidMaxResultsException;
        return this;
    }
    public Object invalidPathException;
    public GetDifferencesResponse withInvalidPathException(Object invalidPathException) {
        this.invalidPathException = invalidPathException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public GetDifferencesResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object pathDoesNotExistException;
    public GetDifferencesResponse withPathDoesNotExistException(Object pathDoesNotExistException) {
        this.pathDoesNotExistException = pathDoesNotExistException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public GetDifferencesResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public GetDifferencesResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public GetDifferencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}