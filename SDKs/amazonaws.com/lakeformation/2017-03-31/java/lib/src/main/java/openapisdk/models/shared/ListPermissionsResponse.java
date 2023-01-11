package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPermissionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPermissionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalResourcePermissions")
    public PrincipalResourcePermissions[] principalResourcePermissions;
    public ListPermissionsResponse withPrincipalResourcePermissions(PrincipalResourcePermissions[] principalResourcePermissions) {
        this.principalResourcePermissions = principalResourcePermissions;
        return this;
    }
}