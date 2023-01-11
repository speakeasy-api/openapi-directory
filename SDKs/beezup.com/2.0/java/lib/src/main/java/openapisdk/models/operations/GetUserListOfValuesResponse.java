package openapisdk.models.operations;



public class GetUserListOfValuesResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetUserListOfValuesResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetUserListOfValuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetUserListOfValuesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetUserListOfValuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserListOfValuesResponse userListOfValuesResponse;
    public GetUserListOfValuesResponse withUserListOfValuesResponse(openapisdk.models.shared.UserListOfValuesResponse userListOfValuesResponse) {
        this.userListOfValuesResponse = userListOfValuesResponse;
        return this;
    }
}