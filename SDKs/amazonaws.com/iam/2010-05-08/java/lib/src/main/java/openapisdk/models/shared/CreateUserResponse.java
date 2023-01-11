package openapisdk.models.shared;



/**
 * CreateUserResponse
 * Contains the response to a successful <a>CreateUser</a> request. 
**/
public class CreateUserResponse {
    public User user;
    public CreateUserResponse withUser(User user) {
        this.user = user;
        return this;
    }
}