package openapisdk.models.operations;



public class GetLatestAllCountriesResponse {
    public byte[] body;
    public GetLatestAllCountriesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetLatestAllCountriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLatestAllCountriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLatestAllCountries200ApplicationJson[] getLatestAllCountries200ApplicationJSONObjects;
    public GetLatestAllCountriesResponse withGetLatestAllCountries200ApplicationJsonObjects(GetLatestAllCountries200ApplicationJson[] getLatestAllCountries200ApplicationJSONObjects) {
        this.getLatestAllCountries200ApplicationJSONObjects = getLatestAllCountries200ApplicationJSONObjects;
        return this;
    }
}