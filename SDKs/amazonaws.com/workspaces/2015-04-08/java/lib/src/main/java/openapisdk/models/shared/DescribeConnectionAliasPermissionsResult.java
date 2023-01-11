package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeConnectionAliasPermissionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AliasId")
    public String aliasId;
    public DescribeConnectionAliasPermissionsResult withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionAliasPermissions")
    public ConnectionAliasPermission[] connectionAliasPermissions;
    public DescribeConnectionAliasPermissionsResult withConnectionAliasPermissions(ConnectionAliasPermission[] connectionAliasPermissions) {
        this.connectionAliasPermissions = connectionAliasPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeConnectionAliasPermissionsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}