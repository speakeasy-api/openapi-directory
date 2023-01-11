package openapisdk.models.operations;



public class LabTestsListResponse {
    public String contentType;
    public LabTestsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LabTestsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public LabTestsList200ApplicationJson labTestsList200ApplicationJSONObject;
    public LabTestsListResponse withLabTestsList200ApplicationJsonObject(LabTestsList200ApplicationJson labTestsList200ApplicationJSONObject) {
        this.labTestsList200ApplicationJSONObject = labTestsList200ApplicationJSONObject;
        return this;
    }
}