package openapisdk.models.operations;



public class LabResultsListResponse {
    public String contentType;
    public LabResultsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LabResultsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public LabResultsList200ApplicationJson labResultsList200ApplicationJSONObject;
    public LabResultsListResponse withLabResultsList200ApplicationJsonObject(LabResultsList200ApplicationJson labResultsList200ApplicationJSONObject) {
        this.labResultsList200ApplicationJSONObject = labResultsList200ApplicationJSONObject;
        return this;
    }
}