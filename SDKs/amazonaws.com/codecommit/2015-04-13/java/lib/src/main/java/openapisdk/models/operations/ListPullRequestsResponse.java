package openapisdk.models.operations;



public class ListPullRequestsResponse {
    public Object authorDoesNotExistException;
    public ListPullRequestsResponse withAuthorDoesNotExistException(Object authorDoesNotExistException) {
        this.authorDoesNotExistException = authorDoesNotExistException;
        return this;
    }
    public String contentType;
    public ListPullRequestsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public ListPullRequestsResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public ListPullRequestsResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public ListPullRequestsResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public ListPullRequestsResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public ListPullRequestsResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object invalidAuthorArnException;
    public ListPullRequestsResponse withInvalidAuthorArnException(Object invalidAuthorArnException) {
        this.invalidAuthorArnException = invalidAuthorArnException;
        return this;
    }
    public Object invalidContinuationTokenException;
    public ListPullRequestsResponse withInvalidContinuationTokenException(Object invalidContinuationTokenException) {
        this.invalidContinuationTokenException = invalidContinuationTokenException;
        return this;
    }
    public Object invalidMaxResultsException;
    public ListPullRequestsResponse withInvalidMaxResultsException(Object invalidMaxResultsException) {
        this.invalidMaxResultsException = invalidMaxResultsException;
        return this;
    }
    public Object invalidPullRequestStatusException;
    public ListPullRequestsResponse withInvalidPullRequestStatusException(Object invalidPullRequestStatusException) {
        this.invalidPullRequestStatusException = invalidPullRequestStatusException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public ListPullRequestsResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public openapisdk.models.shared.ListPullRequestsOutput listPullRequestsOutput;
    public ListPullRequestsResponse withListPullRequestsOutput(openapisdk.models.shared.ListPullRequestsOutput listPullRequestsOutput) {
        this.listPullRequestsOutput = listPullRequestsOutput;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public ListPullRequestsResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public ListPullRequestsResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public ListPullRequestsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}