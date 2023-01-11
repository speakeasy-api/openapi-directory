package openapisdk.models.operations;



public class GetV4LayersAsPlantedResponse {
    public String contentType;
    public GetV4LayersAsPlantedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetV4LayersAsPlantedResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetV4LayersAsPlantedResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetV4LayersAsPlantedResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Object plantingActivities;
    public GetV4LayersAsPlantedResponse withPlantingActivities(Object plantingActivities) {
        this.plantingActivities = plantingActivities;
        return this;
    }
    public Long statusCode;
    public GetV4LayersAsPlantedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}