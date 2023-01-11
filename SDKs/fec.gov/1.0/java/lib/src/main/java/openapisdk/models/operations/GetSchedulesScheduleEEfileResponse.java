package openapisdk.models.operations;



public class GetSchedulesScheduleEEfileResponse {
    public String contentType;
    public GetSchedulesScheduleEEfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleEEfilePage scheduleEEfilePage;
    public GetSchedulesScheduleEEfileResponse withScheduleEEfilePage(openapisdk.models.shared.ScheduleEEfilePage scheduleEEfilePage) {
        this.scheduleEEfilePage = scheduleEEfilePage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleEEfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}