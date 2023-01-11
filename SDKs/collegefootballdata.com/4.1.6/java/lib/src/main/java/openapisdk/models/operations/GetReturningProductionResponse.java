package openapisdk.models.operations;



public class GetReturningProductionResponse {
    public String contentType;
    public GetReturningProductionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReturningProduction[] returningProductions;
    public GetReturningProductionResponse withReturningProductions(openapisdk.models.shared.ReturningProduction[] returningProductions) {
        this.returningProductions = returningProductions;
        return this;
    }
    public Long statusCode;
    public GetReturningProductionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}