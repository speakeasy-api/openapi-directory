package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor")
    public String doctor;
    public UserProfile withDoctor(String doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserProfile withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_doctor")
    public String isDoctor;
    public UserProfile withIsDoctor(String isDoctor) {
        this.isDoctor = isDoctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_staff")
    public String isStaff;
    public UserProfile withIsStaff(String isStaff) {
        this.isStaff = isStaff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public String permissions;
    public UserProfile withPermissions(String permissions) {
        this.permissions = permissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("practice_group")
    public String practiceGroup;
    public UserProfile withPracticeGroup(String practiceGroup) {
        this.practiceGroup = practiceGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UserProfile withUsername(String username) {
        this.username = username;
        return this;
    }
}