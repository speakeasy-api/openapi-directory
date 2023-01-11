package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMembersRequestBody {
    @JsonProperty("Accounts")
    public openapisdk.models.shared.Account[] accounts;
    public CreateMembersRequestBody withAccounts(openapisdk.models.shared.Account[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableEmailNotification")
    public Boolean disableEmailNotification;
    public CreateMembersRequestBody withDisableEmailNotification(Boolean disableEmailNotification) {
        this.disableEmailNotification = disableEmailNotification;
        return this;
    }
    @JsonProperty("GraphArn")
    public String graphArn;
    public CreateMembersRequestBody withGraphArn(String graphArn) {
        this.graphArn = graphArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public CreateMembersRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
}