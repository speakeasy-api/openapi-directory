package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * User
 * <p>Contains information about an IAM user entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateUser</a> </p> </li> <li> <p> <a>GetUser</a> </p> </li> <li> <p> <a>ListUsers</a> </p> </li> </ul>
**/
public class User {
    public String arn;
    public User withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public OffsetDateTime createDate;
    public User withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public OffsetDateTime passwordLastUsed;
    public User withPasswordLastUsed(OffsetDateTime passwordLastUsed) {
        this.passwordLastUsed = passwordLastUsed;
        return this;
    }
    public String path;
    public User withPath(String path) {
        this.path = path;
        return this;
    }
    public AttachedPermissionsBoundary permissionsBoundary;
    public User withPermissionsBoundary(AttachedPermissionsBoundary permissionsBoundary) {
        this.permissionsBoundary = permissionsBoundary;
        return this;
    }
    public Tag[] tags;
    public User withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    public String userId;
    public User withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    public String userName;
    public User withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}