package openapisdk.models.operations;



public class GetSchedulesScheduleABySizeByCandidateResponse {
    public String contentType;
    public GetSchedulesScheduleABySizeByCandidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScheduleABySizeCandidatePage scheduleABySizeCandidatePage;
    public GetSchedulesScheduleABySizeByCandidateResponse withScheduleABySizeCandidatePage(openapisdk.models.shared.ScheduleABySizeCandidatePage scheduleABySizeCandidatePage) {
        this.scheduleABySizeCandidatePage = scheduleABySizeCandidatePage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleABySizeByCandidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}