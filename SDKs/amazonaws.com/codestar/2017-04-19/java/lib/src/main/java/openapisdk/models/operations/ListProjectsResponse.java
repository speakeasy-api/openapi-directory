package openapisdk.models.operations;



public class ListProjectsResponse {
    public String contentType;
    public ListProjectsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListProjectsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListProjectsResult listProjectsResult;
    public ListProjectsResponse withListProjectsResult(openapisdk.models.shared.ListProjectsResult listProjectsResult) {
        this.listProjectsResult = listProjectsResult;
        return this;
    }
    public Long statusCode;
    public ListProjectsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListProjectsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}