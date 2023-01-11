package openapisdk.models.operations;



public class GetCandidatesSearchResponse {
    public openapisdk.models.shared.CandidatePage candidatePage;
    public GetCandidatesSearchResponse withCandidatePage(openapisdk.models.shared.CandidatePage candidatePage) {
        this.candidatePage = candidatePage;
        return this;
    }
    public String contentType;
    public GetCandidatesSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCandidatesSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}