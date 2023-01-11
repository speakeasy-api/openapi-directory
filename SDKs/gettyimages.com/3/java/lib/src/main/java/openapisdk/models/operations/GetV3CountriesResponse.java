package openapisdk.models.operations;



public class GetV3CountriesResponse {
    public String contentType;
    public GetV3CountriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CountriesList countriesList;
    public GetV3CountriesResponse withCountriesList(openapisdk.models.shared.CountriesList countriesList) {
        this.countriesList = countriesList;
        return this;
    }
    public Long statusCode;
    public GetV3CountriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}