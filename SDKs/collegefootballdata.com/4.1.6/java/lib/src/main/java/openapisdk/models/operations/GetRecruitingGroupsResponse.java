package openapisdk.models.operations;



public class GetRecruitingGroupsResponse {
    public String contentType;
    public GetRecruitingGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PositionGroupRecruitingRating[] positionGroupRecruitingRatings;
    public GetRecruitingGroupsResponse withPositionGroupRecruitingRatings(openapisdk.models.shared.PositionGroupRecruitingRating[] positionGroupRecruitingRatings) {
        this.positionGroupRecruitingRatings = positionGroupRecruitingRatings;
        return this;
    }
    public Long statusCode;
    public GetRecruitingGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}