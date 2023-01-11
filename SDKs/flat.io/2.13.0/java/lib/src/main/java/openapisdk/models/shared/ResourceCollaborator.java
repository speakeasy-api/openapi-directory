package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceCollaborator
 * The rights of the current user on a score or collection
**/
public class ResourceCollaborator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aclAdmin")
    public Boolean aclAdmin;
    public ResourceCollaborator withAclAdmin(Boolean aclAdmin) {
        this.aclAdmin = aclAdmin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aclRead")
    public Boolean aclRead;
    public ResourceCollaborator withAclRead(Boolean aclRead) {
        this.aclRead = aclRead;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aclWrite")
    public Boolean aclWrite;
    public ResourceCollaborator withAclWrite(Boolean aclWrite) {
        this.aclWrite = aclWrite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public String collection;
    public ResourceCollaborator withCollection(String collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group")
    public Group group;
    public ResourceCollaborator withGroup(Group group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ResourceCollaborator withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invited")
    public Boolean invited;
    public ResourceCollaborator withInvited(Boolean invited) {
        this.invited = invited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCollaborator")
    public Boolean isCollaborator;
    public ResourceCollaborator withIsCollaborator(Boolean isCollaborator) {
        this.isCollaborator = isCollaborator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public String score;
    public ResourceCollaborator withScore(String score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public UserPublic user;
    public ResourceCollaborator withUser(UserPublic user) {
        this.user = user;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEmail")
    public String userEmail;
    public ResourceCollaborator withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}