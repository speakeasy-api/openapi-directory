package openapisdk.models.operations;



public class ListSolutionsResponse {
    public String contentType;
    public ListSolutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListSolutionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListSolutionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListSolutionsResponse listSolutionsResponse;
    public ListSolutionsResponse withListSolutionsResponse(openapisdk.models.shared.ListSolutionsResponse listSolutionsResponse) {
        this.listSolutionsResponse = listSolutionsResponse;
        return this;
    }
    public Long statusCode;
    public ListSolutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}