package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountCreate {
    @JsonProperty("email")
    public String email;
    public AccountCreate withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public AccountCreate withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_id")
    public Long groupId;
    public AccountCreate withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("institution_user_id")
    public String institutionUserId;
    public AccountCreate withInstitutionUserId(String institutionUserId) {
        this.institutionUserId = institutionUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Boolean isActive;
    public AccountCreate withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonProperty("last_name")
    public String lastName;
    public AccountCreate withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quota")
    public Long quota;
    public AccountCreate withQuota(Long quota) {
        this.quota = quota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symplectic_user_id")
    public String symplecticUserId;
    public AccountCreate withSymplecticUserId(String symplecticUserId) {
        this.symplecticUserId = symplecticUserId;
        return this;
    }
}