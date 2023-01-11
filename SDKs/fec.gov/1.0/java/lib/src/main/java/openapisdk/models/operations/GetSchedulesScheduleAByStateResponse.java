package openapisdk.models.operations;



public class GetSchedulesScheduleAByStateResponse {
    public String contentType;
    public GetSchedulesScheduleAByStateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleAByStatePage scheduleAByStatePage;
    public GetSchedulesScheduleAByStateResponse withScheduleAByStatePage(openapisdk.models.shared.ScheduleAByStatePage scheduleAByStatePage) {
        this.scheduleAByStatePage = scheduleAByStatePage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleAByStateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}