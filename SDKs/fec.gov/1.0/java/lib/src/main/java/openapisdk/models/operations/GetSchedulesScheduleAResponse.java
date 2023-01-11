package openapisdk.models.operations;



public class GetSchedulesScheduleAResponse {
    public String contentType;
    public GetSchedulesScheduleAResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleAPage scheduleAPage;
    public GetSchedulesScheduleAResponse withScheduleAPage(openapisdk.models.shared.ScheduleAPage scheduleAPage) {
        this.scheduleAPage = scheduleAPage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleAResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}