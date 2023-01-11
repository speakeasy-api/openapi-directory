package openapisdk.models.shared;



/**
 * GetUserResponse
 * Contains the response to a successful <a>GetUser</a> request. 
**/
public class GetUserResponse {
    public User user;
    public GetUserResponse withUser(User user) {
        this.user = user;
        return this;
    }
}