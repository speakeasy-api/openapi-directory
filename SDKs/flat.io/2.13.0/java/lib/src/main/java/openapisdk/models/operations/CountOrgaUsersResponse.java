package openapisdk.models.operations;



public class CountOrgaUsersResponse {
    public String contentType;
    public CountOrgaUsersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public CountOrgaUsersResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public CountOrgaUsersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Long countOrgaUsers200ApplicationJSONInteger;
    public CountOrgaUsersResponse withCountOrgaUsers200ApplicationJsonInteger(Long countOrgaUsers200ApplicationJSONInteger) {
        this.countOrgaUsers200ApplicationJSONInteger = countOrgaUsers200ApplicationJSONInteger;
        return this;
    }
}