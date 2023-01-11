package openapisdk.models.operations;



public class GetSchedulesScheduleAByStateByCandidateTotalsResponse {
    public String contentType;
    public GetSchedulesScheduleAByStateByCandidateTotalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleAByStateCandidatePage scheduleAByStateCandidatePage;
    public GetSchedulesScheduleAByStateByCandidateTotalsResponse withScheduleAByStateCandidatePage(openapisdk.models.shared.ScheduleAByStateCandidatePage scheduleAByStateCandidatePage) {
        this.scheduleAByStateCandidatePage = scheduleAByStateCandidatePage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleAByStateByCandidateTotalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}