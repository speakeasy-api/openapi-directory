package openapisdk.models.operations;



public class ReposGetCommitActivityStatsResponse {
    public String contentType;
    public ReposGetCommitActivityStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetCommitActivityStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CommitActivity[] commitActivities;
    public ReposGetCommitActivityStatsResponse withCommitActivities(openapisdk.models.shared.CommitActivity[] commitActivities) {
        this.commitActivities = commitActivities;
        return this;
    }
}