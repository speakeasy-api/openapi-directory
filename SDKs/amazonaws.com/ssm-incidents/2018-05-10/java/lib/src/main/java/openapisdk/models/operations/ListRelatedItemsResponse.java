package openapisdk.models.operations;



public class ListRelatedItemsResponse {
    public Object accessDeniedException;
    public ListRelatedItemsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListRelatedItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListRelatedItemsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListRelatedItemsOutput listRelatedItemsOutput;
    public ListRelatedItemsResponse withListRelatedItemsOutput(openapisdk.models.shared.ListRelatedItemsOutput listRelatedItemsOutput) {
        this.listRelatedItemsOutput = listRelatedItemsOutput;
        return this;
    }
    public Long statusCode;
    public ListRelatedItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListRelatedItemsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListRelatedItemsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}