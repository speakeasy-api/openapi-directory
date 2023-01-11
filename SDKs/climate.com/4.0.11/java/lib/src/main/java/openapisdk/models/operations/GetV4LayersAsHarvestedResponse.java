package openapisdk.models.operations;



public class GetV4LayersAsHarvestedResponse {
    public String contentType;
    public GetV4LayersAsHarvestedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetV4LayersAsHarvestedResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetV4LayersAsHarvestedResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Object harvestActivities;
    public GetV4LayersAsHarvestedResponse withHarvestActivities(Object harvestActivities) {
        this.harvestActivities = harvestActivities;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetV4LayersAsHarvestedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetV4LayersAsHarvestedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}