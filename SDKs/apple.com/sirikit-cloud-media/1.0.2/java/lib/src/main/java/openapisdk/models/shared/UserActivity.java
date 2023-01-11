package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserActivity {
    @JsonProperty("activityType")
    public String activityType;
    public UserActivity withActivityType(String activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistentIdentifier")
    public String persistentIdentifier;
    public UserActivity withPersistentIdentifier(String persistentIdentifier) {
        this.persistentIdentifier = persistentIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public UserActivity withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userInfo")
    public java.util.Map<String, Object> userInfo;
    public UserActivity withUserInfo(java.util.Map<String, Object> userInfo) {
        this.userInfo = userInfo;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public UserActivity withVersion(String version) {
        this.version = version;
        return this;
    }
}