package openapisdk.models.operations;



public class SystemCountriesResponse {
    public String contentType;
    public SystemCountriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SystemCountriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] systemCountries200ApplicationJSONAnies;
    public SystemCountriesResponse withSystemCountries200ApplicationJsonAnies(Object[] systemCountries200ApplicationJSONAnies) {
        this.systemCountries200ApplicationJSONAnies = systemCountries200ApplicationJSONAnies;
        return this;
    }
    public Object systemCountriesDefaultApplicationJSONAny;
    public SystemCountriesResponse withSystemCountriesDefaultApplicationJsonAny(Object systemCountriesDefaultApplicationJSONAny) {
        this.systemCountriesDefaultApplicationJSONAny = systemCountriesDefaultApplicationJSONAny;
        return this;
    }
}