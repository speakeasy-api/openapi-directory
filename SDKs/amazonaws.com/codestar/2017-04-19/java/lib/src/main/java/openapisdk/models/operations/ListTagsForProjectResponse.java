package openapisdk.models.operations;



public class ListTagsForProjectResponse {
    public String contentType;
    public ListTagsForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListTagsForProjectResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListTagsForProjectResult listTagsForProjectResult;
    public ListTagsForProjectResponse withListTagsForProjectResult(openapisdk.models.shared.ListTagsForProjectResult listTagsForProjectResult) {
        this.listTagsForProjectResult = listTagsForProjectResult;
        return this;
    }
    public Object projectNotFoundException;
    public ListTagsForProjectResponse withProjectNotFoundException(Object projectNotFoundException) {
        this.projectNotFoundException = projectNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTagsForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListTagsForProjectResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}