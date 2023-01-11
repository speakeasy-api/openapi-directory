package openapisdk.models.operations;



public class ListForecastsResponse {
    public String contentType;
    public ListForecastsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListForecastsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListForecastsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListForecastsResponse listForecastsResponse;
    public ListForecastsResponse withListForecastsResponse(openapisdk.models.shared.ListForecastsResponse listForecastsResponse) {
        this.listForecastsResponse = listForecastsResponse;
        return this;
    }
    public Long statusCode;
    public ListForecastsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}