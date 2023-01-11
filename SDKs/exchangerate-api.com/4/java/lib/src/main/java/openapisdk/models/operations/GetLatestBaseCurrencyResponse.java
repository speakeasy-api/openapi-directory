package openapisdk.models.operations;



public class GetLatestBaseCurrencyResponse {
    public String contentType;
    public GetLatestBaseCurrencyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLatestBaseCurrencyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLatestBaseCurrency200ApplicationJson getLatestBaseCurrency200ApplicationJSONObject;
    public GetLatestBaseCurrencyResponse withGetLatestBaseCurrency200ApplicationJsonObject(GetLatestBaseCurrency200ApplicationJson getLatestBaseCurrency200ApplicationJSONObject) {
        this.getLatestBaseCurrency200ApplicationJSONObject = getLatestBaseCurrency200ApplicationJSONObject;
        return this;
    }
    public GetLatestBaseCurrency404ApplicationJson getLatestBaseCurrency404ApplicationJSONObject;
    public GetLatestBaseCurrencyResponse withGetLatestBaseCurrency404ApplicationJsonObject(GetLatestBaseCurrency404ApplicationJson getLatestBaseCurrency404ApplicationJSONObject) {
        this.getLatestBaseCurrency404ApplicationJSONObject = getLatestBaseCurrency404ApplicationJSONObject;
        return this;
    }
}