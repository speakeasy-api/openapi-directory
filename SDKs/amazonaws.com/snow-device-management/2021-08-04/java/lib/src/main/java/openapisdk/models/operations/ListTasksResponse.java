package openapisdk.models.operations;



public class ListTasksResponse {
    public Object accessDeniedException;
    public ListTasksResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListTasksResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListTasksOutput listTasksOutput;
    public ListTasksResponse withListTasksOutput(openapisdk.models.shared.ListTasksOutput listTasksOutput) {
        this.listTasksOutput = listTasksOutput;
        return this;
    }
    public Long statusCode;
    public ListTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListTasksResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListTasksResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}