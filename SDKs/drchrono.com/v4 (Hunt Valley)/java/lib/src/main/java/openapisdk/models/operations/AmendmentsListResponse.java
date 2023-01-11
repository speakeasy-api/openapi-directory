package openapisdk.models.operations;



public class AmendmentsListResponse {
    public String contentType;
    public AmendmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AmendmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AmendmentsList200ApplicationJson amendmentsList200ApplicationJSONObject;
    public AmendmentsListResponse withAmendmentsList200ApplicationJsonObject(AmendmentsList200ApplicationJson amendmentsList200ApplicationJSONObject) {
        this.amendmentsList200ApplicationJSONObject = amendmentsList200ApplicationJSONObject;
        return this;
    }
}