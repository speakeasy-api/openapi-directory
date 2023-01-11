package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneusersGetResponses200ContentApplication1jsonSchemaItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public OneusersGetResponses200ContentApplication1jsonSchemaItems withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstName")
    public String firstName;
    public OneusersGetResponses200ContentApplication1jsonSchemaItems withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public OneusersGetResponses200ContentApplication1jsonSchemaItems withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastName")
    public String lastName;
    public OneusersGetResponses200ContentApplication1jsonSchemaItems withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastlogin")
    public String lastlogin;
    public OneusersGetResponses200ContentApplication1jsonSchemaItems withLastlogin(String lastlogin) {
        this.lastlogin = lastlogin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileApplicationDetails")
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication mobileApplicationDetails;
    public OneusersGetResponses200ContentApplication1jsonSchemaItems withMobileApplicationDetails(OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication mobileApplicationDetails) {
        this.mobileApplicationDetails = mobileApplicationDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileNumber")
    public String mobileNumber;
    public OneusersGetResponses200ContentApplication1jsonSchemaItems withMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum role;
    public OneusersGetResponses200ContentApplication1jsonSchemaItems withRole(OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum status;
    public OneusersGetResponses200ContentApplication1jsonSchemaItems withStatus(OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userCvl")
    public String userCvl;
    public OneusersGetResponses200ContentApplication1jsonSchemaItems withUserCvl(String userCvl) {
        this.userCvl = userCvl;
        return this;
    }
}