package openapisdk.models.operations;



public class GetSearchMotorcycleActiveResponse {
    public String contentType;
    public GetSearchMotorcycleActiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSearchMotorcycleActiveResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.MotorcycleSearchResponse motorcycleSearchResponse;
    public GetSearchMotorcycleActiveResponse withMotorcycleSearchResponse(openapisdk.models.shared.MotorcycleSearchResponse motorcycleSearchResponse) {
        this.motorcycleSearchResponse = motorcycleSearchResponse;
        return this;
    }
    public Long statusCode;
    public GetSearchMotorcycleActiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}