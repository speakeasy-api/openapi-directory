package openapisdk.models.operations;



public class GetSchedulesScheduleAEfileResponse {
    public String contentType;
    public GetSchedulesScheduleAEfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleAEfilePage scheduleAEfilePage;
    public GetSchedulesScheduleAEfileResponse withScheduleAEfilePage(openapisdk.models.shared.ScheduleAEfilePage scheduleAEfilePage) {
        this.scheduleAEfilePage = scheduleAEfilePage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleAEfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}