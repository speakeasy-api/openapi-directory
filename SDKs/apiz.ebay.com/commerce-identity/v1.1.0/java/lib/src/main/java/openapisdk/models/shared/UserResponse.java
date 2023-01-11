package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserResponse
 * The type that defines the fields for the getUser method.
**/
public class UserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public String accountType;
    public UserResponse withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessAccount")
    public BusinessAccount businessAccount;
    public UserResponse withBusinessAccount(BusinessAccount businessAccount) {
        this.businessAccount = businessAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualAccount")
    public IndividualAccount individualAccount;
    public UserResponse withIndividualAccount(IndividualAccount individualAccount) {
        this.individualAccount = individualAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationMarketplaceId")
    public String registrationMarketplaceId;
    public UserResponse withRegistrationMarketplaceId(String registrationMarketplaceId) {
        this.registrationMarketplaceId = registrationMarketplaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public UserResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public UserResponse withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UserResponse withUsername(String username) {
        this.username = username;
        return this;
    }
}