package openapisdk.models.operations;



public class GetCoachesResponse {
    public openapisdk.models.shared.Coach[] coaches;
    public GetCoachesResponse withCoaches(openapisdk.models.shared.Coach[] coaches) {
        this.coaches = coaches;
        return this;
    }
    public String contentType;
    public GetCoachesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCoachesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}