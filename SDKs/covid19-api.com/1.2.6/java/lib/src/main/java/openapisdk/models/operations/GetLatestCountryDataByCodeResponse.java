package openapisdk.models.operations;



public class GetLatestCountryDataByCodeResponse {
    public byte[] body;
    public GetLatestCountryDataByCodeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetLatestCountryDataByCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLatestCountryDataByCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLatestCountryDataByCode200ApplicationJson[] getLatestCountryDataByCode200ApplicationJSONObjects;
    public GetLatestCountryDataByCodeResponse withGetLatestCountryDataByCode200ApplicationJsonObjects(GetLatestCountryDataByCode200ApplicationJson[] getLatestCountryDataByCode200ApplicationJSONObjects) {
        this.getLatestCountryDataByCode200ApplicationJSONObjects = getLatestCountryDataByCode200ApplicationJSONObjects;
        return this;
    }
}