package openapisdk.models.operations;



public class LabOrdersSummaryListResponse {
    public String contentType;
    public LabOrdersSummaryListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LabOrdersSummaryListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public LabOrdersSummaryList200ApplicationJson labOrdersSummaryList200ApplicationJSONObject;
    public LabOrdersSummaryListResponse withLabOrdersSummaryList200ApplicationJsonObject(LabOrdersSummaryList200ApplicationJson labOrdersSummaryList200ApplicationJSONObject) {
        this.labOrdersSummaryList200ApplicationJSONObject = labOrdersSummaryList200ApplicationJSONObject;
        return this;
    }
}