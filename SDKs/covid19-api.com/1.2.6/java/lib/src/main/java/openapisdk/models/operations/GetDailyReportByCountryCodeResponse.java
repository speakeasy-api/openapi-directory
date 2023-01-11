package openapisdk.models.operations;



public class GetDailyReportByCountryCodeResponse {
    public byte[] body;
    public GetDailyReportByCountryCodeResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDailyReportByCountryCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDailyReportByCountryCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDailyReportByCountryCode200ApplicationJson[] getDailyReportByCountryCode200ApplicationJSONObjects;
    public GetDailyReportByCountryCodeResponse withGetDailyReportByCountryCode200ApplicationJsonObjects(GetDailyReportByCountryCode200ApplicationJson[] getDailyReportByCountryCode200ApplicationJSONObjects) {
        this.getDailyReportByCountryCode200ApplicationJSONObjects = getDailyReportByCountryCode200ApplicationJSONObjects;
        return this;
    }
}