package openapisdk.models.operations;



public class GetSchedulesScheduleEResponse {
    public String contentType;
    public GetSchedulesScheduleEResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleEPage scheduleEPage;
    public GetSchedulesScheduleEResponse withScheduleEPage(openapisdk.models.shared.ScheduleEPage scheduleEPage) {
        this.scheduleEPage = scheduleEPage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleEResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}