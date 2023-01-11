package openapisdk.models.operations;



public class GetSchedulesScheduleASubIdResponse {
    public String contentType;
    public GetSchedulesScheduleASubIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleAPage scheduleAPage;
    public GetSchedulesScheduleASubIdResponse withScheduleAPage(openapisdk.models.shared.ScheduleAPage scheduleAPage) {
        this.scheduleAPage = scheduleAPage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleASubIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}