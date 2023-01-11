package openapisdk.models.operations;



public class ListMilestonesResponse {
    public Object accessDeniedException;
    public ListMilestonesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListMilestonesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListMilestonesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListMilestonesOutput listMilestonesOutput;
    public ListMilestonesResponse withListMilestonesOutput(openapisdk.models.shared.ListMilestonesOutput listMilestonesOutput) {
        this.listMilestonesOutput = listMilestonesOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListMilestonesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListMilestonesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListMilestonesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListMilestonesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}