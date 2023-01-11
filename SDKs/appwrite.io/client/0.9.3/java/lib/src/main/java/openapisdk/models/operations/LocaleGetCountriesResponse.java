package openapisdk.models.operations;



public class LocaleGetCountriesResponse {
    public String contentType;
    public LocaleGetCountriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LocaleGetCountriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CountryList countryList;
    public LocaleGetCountriesResponse withCountryList(openapisdk.models.shared.CountryList countryList) {
        this.countryList = countryList;
        return this;
    }
}