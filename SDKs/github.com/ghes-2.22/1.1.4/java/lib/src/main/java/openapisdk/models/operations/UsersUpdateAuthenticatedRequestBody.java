package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsersUpdateAuthenticatedRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bio")
    public String bio;
    public UsersUpdateAuthenticatedRequestBody withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blog")
    public String blog;
    public UsersUpdateAuthenticatedRequestBody withBlog(String blog) {
        this.blog = blog;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public UsersUpdateAuthenticatedRequestBody withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UsersUpdateAuthenticatedRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hireable")
    public Boolean hireable;
    public UsersUpdateAuthenticatedRequestBody withHireable(Boolean hireable) {
        this.hireable = hireable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public UsersUpdateAuthenticatedRequestBody withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UsersUpdateAuthenticatedRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twitter_username")
    public String twitterUsername;
    public UsersUpdateAuthenticatedRequestBody withTwitterUsername(String twitterUsername) {
        this.twitterUsername = twitterUsername;
        return this;
    }
}