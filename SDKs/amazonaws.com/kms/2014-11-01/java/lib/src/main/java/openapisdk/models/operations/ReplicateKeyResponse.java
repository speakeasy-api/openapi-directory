package openapisdk.models.operations;



public class ReplicateKeyResponse {
    public Object alreadyExistsException;
    public ReplicateKeyResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public ReplicateKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object disabledException;
    public ReplicateKeyResponse withDisabledException(Object disabledException) {
        this.disabledException = disabledException;
        return this;
    }
    public Object invalidArnException;
    public ReplicateKeyResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public ReplicateKeyResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object kmsInvalidStateException;
    public ReplicateKeyResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object limitExceededException;
    public ReplicateKeyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object malformedPolicyDocumentException;
    public ReplicateKeyResponse withMalformedPolicyDocumentException(Object malformedPolicyDocumentException) {
        this.malformedPolicyDocumentException = malformedPolicyDocumentException;
        return this;
    }
    public Object notFoundException;
    public ReplicateKeyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.ReplicateKeyResponse replicateKeyResponse;
    public ReplicateKeyResponse withReplicateKeyResponse(openapisdk.models.shared.ReplicateKeyResponse replicateKeyResponse) {
        this.replicateKeyResponse = replicateKeyResponse;
        return this;
    }
    public Long statusCode;
    public ReplicateKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagException;
    public ReplicateKeyResponse withTagException(Object tagException) {
        this.tagException = tagException;
        return this;
    }
    public Object unsupportedOperationException;
    public ReplicateKeyResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}