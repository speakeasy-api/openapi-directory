package openapisdk.models.operations;



public class GetDailyReportTotalsResponse {
    public byte[] body;
    public GetDailyReportTotalsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDailyReportTotalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDailyReportTotalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDailyReportTotals200ApplicationJson[] getDailyReportTotals200ApplicationJSONObjects;
    public GetDailyReportTotalsResponse withGetDailyReportTotals200ApplicationJsonObjects(GetDailyReportTotals200ApplicationJson[] getDailyReportTotals200ApplicationJSONObjects) {
        this.getDailyReportTotals200ApplicationJSONObjects = getDailyReportTotals200ApplicationJSONObjects;
        return this;
    }
}