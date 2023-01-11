package openapisdk.models.operations;



public class GetCandidatesTotalsResponse {
    public openapisdk.models.shared.CandidateHistoryTotalPage candidateHistoryTotalPage;
    public GetCandidatesTotalsResponse withCandidateHistoryTotalPage(openapisdk.models.shared.CandidateHistoryTotalPage candidateHistoryTotalPage) {
        this.candidateHistoryTotalPage = candidateHistoryTotalPage;
        return this;
    }
    public String contentType;
    public GetCandidatesTotalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidatesTotalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}