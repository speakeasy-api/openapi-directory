package openapisdk.models.operations;



public class GetDailyReportByCountryNameResponse {
    public byte[] body;
    public GetDailyReportByCountryNameResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDailyReportByCountryNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDailyReportByCountryNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDailyReportByCountryName200ApplicationJson[] getDailyReportByCountryName200ApplicationJSONObjects;
    public GetDailyReportByCountryNameResponse withGetDailyReportByCountryName200ApplicationJsonObjects(GetDailyReportByCountryName200ApplicationJson[] getDailyReportByCountryName200ApplicationJSONObjects) {
        this.getDailyReportByCountryName200ApplicationJSONObjects = getDailyReportByCountryName200ApplicationJSONObjects;
        return this;
    }
}