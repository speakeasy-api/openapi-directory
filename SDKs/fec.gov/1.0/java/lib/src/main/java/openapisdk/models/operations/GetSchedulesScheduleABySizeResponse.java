package openapisdk.models.operations;



public class GetSchedulesScheduleABySizeResponse {
    public String contentType;
    public GetSchedulesScheduleABySizeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleABySizePage scheduleABySizePage;
    public GetSchedulesScheduleABySizeResponse withScheduleABySizePage(openapisdk.models.shared.ScheduleABySizePage scheduleABySizePage) {
        this.scheduleABySizePage = scheduleABySizePage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleABySizeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}