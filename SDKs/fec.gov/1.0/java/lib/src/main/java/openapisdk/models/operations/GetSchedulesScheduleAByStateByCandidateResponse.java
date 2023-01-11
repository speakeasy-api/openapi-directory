package openapisdk.models.operations;



public class GetSchedulesScheduleAByStateByCandidateResponse {
    public String contentType;
    public GetSchedulesScheduleAByStateByCandidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleAByStateCandidatePage scheduleAByStateCandidatePage;
    public GetSchedulesScheduleAByStateByCandidateResponse withScheduleAByStateCandidatePage(openapisdk.models.shared.ScheduleAByStateCandidatePage scheduleAByStateCandidatePage) {
        this.scheduleAByStateCandidatePage = scheduleAByStateCandidatePage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleAByStateByCandidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}