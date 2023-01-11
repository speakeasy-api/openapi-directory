package openapisdk.models.operations;



public class GetCandidatesResponse {
    public openapisdk.models.shared.CandidatePage candidatePage;
    public GetCandidatesResponse withCandidatePage(openapisdk.models.shared.CandidatePage candidatePage) {
        this.candidatePage = candidatePage;
        return this;
    }
    public String contentType;
    public GetCandidatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}