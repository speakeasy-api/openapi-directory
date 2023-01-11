package openapisdk.models.operations;



public class CreateTagsResponse {
    public String contentType;
    public CreateTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createTagsResult;
    public CreateTagsResponse withCreateTagsResult(java.util.Map<String, Object> createTagsResult) {
        this.createTagsResult = createTagsResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public CreateTagsResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateTagsResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateTagsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}