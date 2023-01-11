package openapisdk.models.operations;



public class GetSchedulesScheduleAByEmployerResponse {
    public String contentType;
    public GetSchedulesScheduleAByEmployerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleAByEmployerPage scheduleAByEmployerPage;
    public GetSchedulesScheduleAByEmployerResponse withScheduleAByEmployerPage(openapisdk.models.shared.ScheduleAByEmployerPage scheduleAByEmployerPage) {
        this.scheduleAByEmployerPage = scheduleAByEmployerPage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleAByEmployerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}