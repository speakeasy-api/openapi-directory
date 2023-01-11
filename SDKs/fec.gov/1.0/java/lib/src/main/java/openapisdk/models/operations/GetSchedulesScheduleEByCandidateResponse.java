package openapisdk.models.operations;



public class GetSchedulesScheduleEByCandidateResponse {
    public String contentType;
    public GetSchedulesScheduleEByCandidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleEByCandidatePage scheduleEByCandidatePage;
    public GetSchedulesScheduleEByCandidateResponse withScheduleEByCandidatePage(openapisdk.models.shared.ScheduleEByCandidatePage scheduleEByCandidatePage) {
        this.scheduleEByCandidatePage = scheduleEByCandidatePage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleEByCandidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}