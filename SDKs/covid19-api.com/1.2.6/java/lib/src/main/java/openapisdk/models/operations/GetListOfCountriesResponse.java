package openapisdk.models.operations;



public class GetListOfCountriesResponse {
    public byte[] body;
    public GetListOfCountriesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListOfCountriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListOfCountriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetListOfCountries200ApplicationJson[] getListOfCountries200ApplicationJSONObjects;
    public GetListOfCountriesResponse withGetListOfCountries200ApplicationJsonObjects(GetListOfCountries200ApplicationJson[] getListOfCountries200ApplicationJSONObjects) {
        this.getListOfCountries200ApplicationJSONObjects = getListOfCountries200ApplicationJSONObjects;
        return this;
    }
}