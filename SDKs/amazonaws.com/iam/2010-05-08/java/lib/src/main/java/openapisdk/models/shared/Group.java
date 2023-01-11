package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * Group
 * <p>Contains information about an IAM group entity.</p> <p>This data type is used as a response element in the following operations:</p> <ul> <li> <p> <a>CreateGroup</a> </p> </li> <li> <p> <a>GetGroup</a> </p> </li> <li> <p> <a>ListGroups</a> </p> </li> </ul>
**/
public class Group {
    public String arn;
    public Group withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public OffsetDateTime createDate;
    public Group withCreateDate(OffsetDateTime createDate) {
        this.createDate = createDate;
        return this;
    }
    public String groupId;
    public Group withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    public String groupName;
    public Group withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    public String path;
    public Group withPath(String path) {
        this.path = path;
        return this;
    }
}