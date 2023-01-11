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
    public java.util.Map<String, Object> reposGetCommitActivityStats202ApplicationJSONObject;
    public ReposGetCommitActivityStatsResponse withReposGetCommitActivityStats202ApplicationJsonObject(java.util.Map<String, Object> reposGetCommitActivityStats202ApplicationJSONObject) {
        this.reposGetCommitActivityStats202ApplicationJSONObject = reposGetCommitActivityStats202ApplicationJSONObject;
        return this;
    }
}