package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * EnvironmentMember
 * Information about an environment member for an Cloud9 development environment.
**/
public class EnvironmentMember {
    @JsonProperty("environmentId")
    public String environmentId;
    public EnvironmentMember withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastAccess")
    public OffsetDateTime lastAccess;
    public EnvironmentMember withLastAccess(OffsetDateTime lastAccess) {
        this.lastAccess = lastAccess;
        return this;
    }
    @JsonProperty("permissions")
    public PermissionsEnum permissions;
    public EnvironmentMember withPermissions(PermissionsEnum permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonProperty("userArn")
    public String userArn;
    public EnvironmentMember withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public EnvironmentMember withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}