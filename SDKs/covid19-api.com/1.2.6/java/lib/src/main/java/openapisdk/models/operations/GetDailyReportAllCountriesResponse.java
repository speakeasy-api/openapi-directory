package openapisdk.models.operations;



public class GetDailyReportAllCountriesResponse {
    public byte[] body;
    public GetDailyReportAllCountriesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDailyReportAllCountriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDailyReportAllCountriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDailyReportAllCountries200ApplicationJson[] getDailyReportAllCountries200ApplicationJSONObjects;
    public GetDailyReportAllCountriesResponse withGetDailyReportAllCountries200ApplicationJsonObjects(GetDailyReportAllCountries200ApplicationJson[] getDailyReportAllCountries200ApplicationJSONObjects) {
        this.getDailyReportAllCountries200ApplicationJSONObjects = getDailyReportAllCountries200ApplicationJSONObjects;
        return this;
    }
}