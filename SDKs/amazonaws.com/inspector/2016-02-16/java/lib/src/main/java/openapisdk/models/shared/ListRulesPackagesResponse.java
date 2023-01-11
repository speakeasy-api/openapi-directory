package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRulesPackagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRulesPackagesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("rulesPackageArns")
    public String[] rulesPackageArns;
    public ListRulesPackagesResponse withRulesPackageArns(String[] rulesPackageArns) {
        this.rulesPackageArns = rulesPackageArns;
        return this;
    }
}