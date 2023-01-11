package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * InstanceProfile
 * <p>Contains information about an instance profile.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateInstanceProfile</a> </p> </li> <li> <p> <a>GetInstanceProfile</a> </p> </li> <li> <p> <a>ListInstanceProfiles</a> </p> </li> <li> <p> <a>ListInstanceProfilesForRole</a> </p> </li> </ul>
**/
public class InstanceProfile {
    public String arn;
    public InstanceProfile withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public OffsetDateTime createDate;
    public InstanceProfile withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public String instanceProfileId;
    public InstanceProfile withInstanceProfileId(String instanceProfileId) {
        this.instanceProfileId = instanceProfileId;
        return this;
    }
    public String instanceProfileName;
    public InstanceProfile withInstanceProfileName(String instanceProfileName) {
        this.instanceProfileName = instanceProfileName;
        return this;
    }
    public String path;
    public InstanceProfile withPath(String path) {
        this.path = path;
        return this;
    }
    public Role[] roles;
    public InstanceProfile withRoles(Role[] roles) {
        this.roles = roles;
        return this;
    }
    public Tag[] tags;
    public InstanceProfile withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}