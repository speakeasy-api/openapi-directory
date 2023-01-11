package openapisdk.models.operations;



public class ReposGetCommunityProfileMetricsResponse {
    public String contentType;
    public ReposGetCommunityProfileMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReposGetCommunityProfileMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CommunityProfile communityProfile;
    public ReposGetCommunityProfileMetricsResponse withCommunityProfile(openapisdk.models.shared.CommunityProfile communityProfile) {
        this.communityProfile = communityProfile;
        return this;
    }
}