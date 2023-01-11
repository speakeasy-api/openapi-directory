package openapisdk.models.operations;



public class GetGroupDetailsResponse {
    public String contentType;
    public GetGroupDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetGroupDetailsResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public openapisdk.models.shared.GroupDetails groupDetails;
    public GetGroupDetailsResponse withGroupDetails(openapisdk.models.shared.GroupDetails groupDetails) {
        this.groupDetails = groupDetails;
        return this;
    }
    public Long statusCode;
    public GetGroupDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}