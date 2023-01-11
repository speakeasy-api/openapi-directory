package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPartnerEventSourceAccountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPartnerEventSourceAccountsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartnerEventSourceAccounts")
    public PartnerEventSourceAccount[] partnerEventSourceAccounts;
    public ListPartnerEventSourceAccountsResponse withPartnerEventSourceAccounts(PartnerEventSourceAccount[] partnerEventSourceAccounts) {
        this.partnerEventSourceAccounts = partnerEventSourceAccounts;
        return this;
    }
}