package openapisdk.models.operations;



public class GetSchedulesScheduleETotalsByCandidateResponse {
    public String contentType;
    public GetSchedulesScheduleETotalsByCandidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IeTotalsByCandidatePage ieTotalsByCandidatePage;
    public GetSchedulesScheduleETotalsByCandidateResponse withIeTotalsByCandidatePage(openapisdk.models.shared.IeTotalsByCandidatePage ieTotalsByCandidatePage) {
        this.ieTotalsByCandidatePage = ieTotalsByCandidatePage;
        return this;
    }
    public Long statusCode;
    public GetSchedulesScheduleETotalsByCandidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}