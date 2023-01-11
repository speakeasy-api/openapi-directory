package openapisdk.models.operations;



public class UsersListResponse {
    public String contentType;
    public UsersListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UsersListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserList userList;
    public UsersListResponse withUserList(openapisdk.models.shared.UserList userList) {
        this.userList = userList;
        return this;
    }
}