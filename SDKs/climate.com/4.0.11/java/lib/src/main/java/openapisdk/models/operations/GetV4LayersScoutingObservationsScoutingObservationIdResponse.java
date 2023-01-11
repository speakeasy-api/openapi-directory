package openapisdk.models.operations;



public class GetV4LayersScoutingObservationsScoutingObservationIdResponse {
    public String contentType;
    public GetV4LayersScoutingObservationsScoutingObservationIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetV4LayersScoutingObservationsScoutingObservationIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetV4LayersScoutingObservationsScoutingObservationIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ScoutingObservation scoutingObservation;
    public GetV4LayersScoutingObservationsScoutingObservationIdResponse withScoutingObservation(openapisdk.models.shared.ScoutingObservation scoutingObservation) {
        this.scoutingObservation = scoutingObservation;
        return this;
    }
    public Long statusCode;
    public GetV4LayersScoutingObservationsScoutingObservationIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}