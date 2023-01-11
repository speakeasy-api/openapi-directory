package openapisdk.models.operations;



public class GetSchedulesScheduleAByZipResponse {
    public String contentType;
    public GetSchedulesScheduleAByZipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleAByZipPage scheduleAByZipPage;
    public GetSchedulesScheduleAByZipResponse withScheduleAByZipPage(openapisdk.models.shared.ScheduleAByZipPage scheduleAByZipPage) {
        this.scheduleAByZipPage = scheduleAByZipPage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleAByZipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}