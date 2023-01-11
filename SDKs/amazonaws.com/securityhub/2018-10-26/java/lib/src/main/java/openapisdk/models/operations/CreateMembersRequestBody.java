package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateMembersRequestBody {
    @JsonProperty("AccountDetails")
    public openapisdk.models.shared.AccountDetails[] accountDetails;
    public CreateMembersRequestBody withAccountDetails(openapisdk.models.shared.AccountDetails[] accountDetails) {
        this.accountDetails = accountDetails;
        return this;
    }
}