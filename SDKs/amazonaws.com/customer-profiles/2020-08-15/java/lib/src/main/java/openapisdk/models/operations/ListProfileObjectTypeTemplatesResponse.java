package openapisdk.models.operations;



public class ListProfileObjectTypeTemplatesResponse {
    public Object accessDeniedException;
    public ListProfileObjectTypeTemplatesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public ListProfileObjectTypeTemplatesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListProfileObjectTypeTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListProfileObjectTypeTemplatesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListProfileObjectTypeTemplatesResponse listProfileObjectTypeTemplatesResponse;
    public ListProfileObjectTypeTemplatesResponse withListProfileObjectTypeTemplatesResponse(openapisdk.models.shared.ListProfileObjectTypeTemplatesResponse listProfileObjectTypeTemplatesResponse) {
        this.listProfileObjectTypeTemplatesResponse = listProfileObjectTypeTemplatesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProfileObjectTypeTemplatesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProfileObjectTypeTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListProfileObjectTypeTemplatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}