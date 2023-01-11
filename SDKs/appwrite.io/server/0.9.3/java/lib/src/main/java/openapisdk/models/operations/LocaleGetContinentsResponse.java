package openapisdk.models.operations;



public class LocaleGetContinentsResponse {
    public String contentType;
    public LocaleGetContinentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LocaleGetContinentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ContinentList continentList;
    public LocaleGetContinentsResponse withContinentList(openapisdk.models.shared.ContinentList continentList) {
        this.continentList = continentList;
        return this;
    }
}