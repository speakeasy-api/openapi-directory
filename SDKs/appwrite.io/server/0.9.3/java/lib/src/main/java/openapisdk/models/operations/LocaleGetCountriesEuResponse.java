package openapisdk.models.operations;



public class LocaleGetCountriesEuResponse {
    public String contentType;
    public LocaleGetCountriesEuResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LocaleGetCountriesEuResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CountryList countryList;
    public LocaleGetCountriesEuResponse withCountryList(openapisdk.models.shared.CountryList countryList) {
        this.countryList = countryList;
        return this;
    }
}