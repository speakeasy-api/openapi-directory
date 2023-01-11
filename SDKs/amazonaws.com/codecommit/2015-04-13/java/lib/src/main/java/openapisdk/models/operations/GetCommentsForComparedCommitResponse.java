package openapisdk.models.operations;



public class GetCommentsForComparedCommitResponse {
    public Object commitDoesNotExistException;
    public GetCommentsForComparedCommitResponse withCommitDoesNotExistException(Object commitDoesNotExistException) {
        this.commitDoesNotExistException = commitDoesNotExistException;
        return this;
    }
    public Object commitIdRequiredException;
    public GetCommentsForComparedCommitResponse withCommitIdRequiredException(Object commitIdRequiredException) {
        this.commitIdRequiredException = commitIdRequiredException;
        return this;
    }
    public String contentType;
    public GetCommentsForComparedCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public GetCommentsForComparedCommitResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public GetCommentsForComparedCommitResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public GetCommentsForComparedCommitResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public GetCommentsForComparedCommitResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public GetCommentsForComparedCommitResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public openapisdk.models.shared.GetCommentsForComparedCommitOutput getCommentsForComparedCommitOutput;
    public GetCommentsForComparedCommitResponse withGetCommentsForComparedCommitOutput(openapisdk.models.shared.GetCommentsForComparedCommitOutput getCommentsForComparedCommitOutput) {
        this.getCommentsForComparedCommitOutput = getCommentsForComparedCommitOutput;
        return this;
    }
    public Object invalidCommitIdException;
    public GetCommentsForComparedCommitResponse withInvalidCommitIdException(Object invalidCommitIdException) {
        this.invalidCommitIdException = invalidCommitIdException;
        return this;
    }
    public Object invalidContinuationTokenException;
    public GetCommentsForComparedCommitResponse withInvalidContinuationTokenException(Object invalidContinuationTokenException) {
        this.invalidContinuationTokenException = invalidContinuationTokenException;
        return this;
    }
    public Object invalidMaxResultsException;
    public GetCommentsForComparedCommitResponse withInvalidMaxResultsException(Object invalidMaxResultsException) {
        this.invalidMaxResultsException = invalidMaxResultsException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public GetCommentsForComparedCommitResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public GetCommentsForComparedCommitResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public GetCommentsForComparedCommitResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public GetCommentsForComparedCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}