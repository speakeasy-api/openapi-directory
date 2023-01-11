package openapisdk.models.operations;



public class GetListOfIssuersIdResponse {
    public String contentType;
    public GetListOfIssuersIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetListOfIssuersId400ApplicationJson getListOfIssuersId400ApplicationJSONObject;
    public GetListOfIssuersIdResponse withGetListOfIssuersId400ApplicationJsonObject(GetListOfIssuersId400ApplicationJson getListOfIssuersId400ApplicationJSONObject) {
        this.getListOfIssuersId400ApplicationJSONObject = getListOfIssuersId400ApplicationJSONObject;
        return this;
    }
    public GetListOfIssuersId401ApplicationJson getListOfIssuersId401ApplicationJSONObject;
    public GetListOfIssuersIdResponse withGetListOfIssuersId401ApplicationJsonObject(GetListOfIssuersId401ApplicationJson getListOfIssuersId401ApplicationJSONObject) {
        this.getListOfIssuersId401ApplicationJSONObject = getListOfIssuersId401ApplicationJSONObject;
        return this;
    }
    public GetListOfIssuersId500ApplicationJson getListOfIssuersId500ApplicationJSONObject;
    public GetListOfIssuersIdResponse withGetListOfIssuersId500ApplicationJsonObject(GetListOfIssuersId500ApplicationJson getListOfIssuersId500ApplicationJSONObject) {
        this.getListOfIssuersId500ApplicationJSONObject = getListOfIssuersId500ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.IssuerResponse issuerResponse;
    public GetListOfIssuersIdResponse withIssuerResponse(openapisdk.models.shared.IssuerResponse issuerResponse) {
        this.issuerResponse = issuerResponse;
        return this;
    }
    public Long statusCode;
    public GetListOfIssuersIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}