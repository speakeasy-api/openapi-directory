package openapisdk.models.operations;



public class ListPredictorsResponse {
    public String contentType;
    public ListPredictorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ListPredictorsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListPredictorsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListPredictorsResponse listPredictorsResponse;
    public ListPredictorsResponse withListPredictorsResponse(openapisdk.models.shared.ListPredictorsResponse listPredictorsResponse) {
        this.listPredictorsResponse = listPredictorsResponse;
        return this;
    }
    public Long statusCode;
    public ListPredictorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}