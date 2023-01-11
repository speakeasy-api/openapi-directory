package openapisdk.models.operations;



public class ListReplicationSetsResponse {
    public Object accessDeniedException;
    public ListReplicationSetsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListReplicationSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListReplicationSetsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListReplicationSetsOutput listReplicationSetsOutput;
    public ListReplicationSetsResponse withListReplicationSetsOutput(openapisdk.models.shared.ListReplicationSetsOutput listReplicationSetsOutput) {
        this.listReplicationSetsOutput = listReplicationSetsOutput;
        return this;
    }
    public Long statusCode;
    public ListReplicationSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListReplicationSetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListReplicationSetsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}