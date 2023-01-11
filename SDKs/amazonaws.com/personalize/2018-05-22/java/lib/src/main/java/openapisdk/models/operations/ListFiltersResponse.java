package openapisdk.models.operations;



public class ListFiltersResponse {
    public String contentType;
    public ListFiltersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListFiltersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListFiltersResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListFiltersResponse listFiltersResponse;
    public ListFiltersResponse withListFiltersResponse(openapisdk.models.shared.ListFiltersResponse listFiltersResponse) {
        this.listFiltersResponse = listFiltersResponse;
        return this;
    }
    public Long statusCode;
    public ListFiltersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}