package openapisdk.models.operations;



public class GetPersonalizedRankingResponse {
    public String contentType;
    public GetPersonalizedRankingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPersonalizedRankingResponse getPersonalizedRankingResponse;
    public GetPersonalizedRankingResponse withGetPersonalizedRankingResponse(openapisdk.models.shared.GetPersonalizedRankingResponse getPersonalizedRankingResponse) {
        this.getPersonalizedRankingResponse = getPersonalizedRankingResponse;
        return this;
    }
    public Object invalidInputException;
    public GetPersonalizedRankingResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetPersonalizedRankingResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetPersonalizedRankingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}