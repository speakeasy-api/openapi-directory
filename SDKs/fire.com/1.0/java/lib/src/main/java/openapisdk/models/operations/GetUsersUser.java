package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUsersUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public GetUsersUser withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public GetUsersUser withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetUsersUser withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public GetUsersUser withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastlogin")
    public String lastlogin;
    public GetUsersUser withLastlogin(String lastlogin) {
        this.lastlogin = lastlogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileApplicationDetails")
    public GetUsersUserMobileApplication mobileApplicationDetails;
    public GetUsersUser withMobileApplicationDetails(GetUsersUserMobileApplication mobileApplicationDetails) {
        this.mobileApplicationDetails = mobileApplicationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileNumber")
    public String mobileNumber;
    public GetUsersUser withMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public GetUsersUserRoleEnum role;
    public GetUsersUser withRole(GetUsersUserRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetUsersUserStatusEnum status;
    public GetUsersUser withStatus(GetUsersUserStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userCvl")
    public String userCvl;
    public GetUsersUser withUserCvl(String userCvl) {
        this.userCvl = userCvl;
        return this;
    }
}