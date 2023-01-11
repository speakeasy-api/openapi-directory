package openapisdk.models.operations;



public class GetNamesCandidatesResponse {
    public openapisdk.models.shared.CandidateSearchList candidateSearchList;
    public GetNamesCandidatesResponse withCandidateSearchList(openapisdk.models.shared.CandidateSearchList candidateSearchList) {
        this.candidateSearchList = candidateSearchList;
        return this;
    }
    public String contentType;
    public GetNamesCandidatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNamesCandidatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}