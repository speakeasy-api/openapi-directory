package openapisdk.models.operations;



public class GetPopularCarsResponse {
    public String contentType;
    public GetPopularCarsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetPopularCarsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.PopularCars popularCars;
    public GetPopularCarsResponse withPopularCars(openapisdk.models.shared.PopularCars popularCars) {
        this.popularCars = popularCars;
        return this;
    }
    public Long statusCode;
    public GetPopularCarsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}