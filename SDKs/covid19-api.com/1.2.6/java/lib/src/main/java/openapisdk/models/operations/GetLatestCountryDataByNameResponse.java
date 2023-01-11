package openapisdk.models.operations;



public class GetLatestCountryDataByNameResponse {
    public byte[] body;
    public GetLatestCountryDataByNameResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetLatestCountryDataByNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLatestCountryDataByNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLatestCountryDataByName200ApplicationJson[] getLatestCountryDataByName200ApplicationJSONObjects;
    public GetLatestCountryDataByNameResponse withGetLatestCountryDataByName200ApplicationJsonObjects(GetLatestCountryDataByName200ApplicationJson[] getLatestCountryDataByName200ApplicationJSONObjects) {
        this.getLatestCountryDataByName200ApplicationJSONObjects = getLatestCountryDataByName200ApplicationJSONObjects;
        return this;
    }
}