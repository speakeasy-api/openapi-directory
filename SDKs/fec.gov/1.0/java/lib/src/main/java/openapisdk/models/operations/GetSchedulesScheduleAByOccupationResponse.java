package openapisdk.models.operations;



public class GetSchedulesScheduleAByOccupationResponse {
    public String contentType;
    public GetSchedulesScheduleAByOccupationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleAByOccupationPage scheduleAByOccupationPage;
    public GetSchedulesScheduleAByOccupationResponse withScheduleAByOccupationPage(openapisdk.models.shared.ScheduleAByOccupationPage scheduleAByOccupationPage) {
        this.scheduleAByOccupationPage = scheduleAByOccupationPage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleAByOccupationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}