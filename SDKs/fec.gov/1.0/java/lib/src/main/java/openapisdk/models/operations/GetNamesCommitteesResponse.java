package openapisdk.models.operations;



public class GetNamesCommitteesResponse {
    public openapisdk.models.shared.CommitteeSearchList committeeSearchList;
    public GetNamesCommitteesResponse withCommitteeSearchList(openapisdk.models.shared.CommitteeSearchList committeeSearchList) {
        this.committeeSearchList = committeeSearchList;
        return this;
    }
    public String contentType;
    public GetNamesCommitteesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetNamesCommitteesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}