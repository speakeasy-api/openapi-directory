package openapisdk.models.operations;



public class GetV4LayersScoutingObservationsResponse {
    public String contentType;
    public GetV4LayersScoutingObservationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> empty;
    public GetV4LayersScoutingObservationsResponse withEmpty(java.util.Map<String, Object> empty) {
        this.empty = empty;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetV4LayersScoutingObservationsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetV4LayersScoutingObservationsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Object scoutingObservations;
    public GetV4LayersScoutingObservationsResponse withScoutingObservations(Object scoutingObservations) {
        this.scoutingObservations = scoutingObservations;
        return this;
    }
    public Long statusCode;
    public GetV4LayersScoutingObservationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}