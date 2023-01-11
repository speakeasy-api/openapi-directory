package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountLimit")
    public AccountLimit accountLimit;
    public GetAccountSettingsResponse withAccountLimit(AccountLimit accountLimit) {
        this.accountLimit = accountLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountUsage")
    public AccountUsage accountUsage;
    public GetAccountSettingsResponse withAccountUsage(AccountUsage accountUsage) {
        this.accountUsage = accountUsage;
        return this;
    }
}