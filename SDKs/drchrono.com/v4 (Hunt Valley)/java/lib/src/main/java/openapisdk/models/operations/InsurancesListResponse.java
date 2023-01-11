package openapisdk.models.operations;



public class InsurancesListResponse {
    public String contentType;
    public InsurancesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public InsurancesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public InsurancesList200ApplicationJson insurancesList200ApplicationJSONObject;
    public InsurancesListResponse withInsurancesList200ApplicationJsonObject(InsurancesList200ApplicationJson insurancesList200ApplicationJSONObject) {
        this.insurancesList200ApplicationJSONObject = insurancesList200ApplicationJSONObject;
        return this;
    }
}