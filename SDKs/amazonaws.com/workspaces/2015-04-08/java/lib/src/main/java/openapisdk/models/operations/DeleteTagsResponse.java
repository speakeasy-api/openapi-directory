package openapisdk.models.operations;



public class DeleteTagsResponse {
    public String contentType;
    public DeleteTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTagsResult;
    public DeleteTagsResponse withDeleteTagsResult(java.util.Map<String, Object> deleteTagsResult) {
        this.deleteTagsResult = deleteTagsResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DeleteTagsResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteTagsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}