package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeAliasInput
 * Represents the input for a request operation.
**/
public class DescribeAliasInput {
    @JsonProperty("AliasId")
    public String aliasId;
    public DescribeAliasInput withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
}