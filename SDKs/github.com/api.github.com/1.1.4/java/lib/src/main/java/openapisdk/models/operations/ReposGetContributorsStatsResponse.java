package openapisdk.models.operations;



public class ReposGetContributorsStatsResponse {
    public String contentType;
    public ReposGetContributorsStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetContributorsStatsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ContributorActivity[] contributorActivities;
    public ReposGetContributorsStatsResponse withContributorActivities(openapisdk.models.shared.ContributorActivity[] contributorActivities) {
        this.contributorActivities = contributorActivities;
        return this;
    }
}