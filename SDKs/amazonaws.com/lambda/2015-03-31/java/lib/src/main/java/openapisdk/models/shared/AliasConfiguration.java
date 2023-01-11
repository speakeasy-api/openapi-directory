package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AliasConfiguration
 * Provides configuration information about a Lambda function <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">alias</a>.
**/
public class AliasConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AliasArn")
    public String aliasArn;
    public AliasConfiguration withAliasArn(String aliasArn) {
        this.aliasArn = aliasArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public AliasConfiguration withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FunctionVersion")
    public String functionVersion;
    public AliasConfiguration withFunctionVersion(String functionVersion) {
        this.functionVersion = functionVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AliasConfiguration withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevisionId")
    public String revisionId;
    public AliasConfiguration withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoutingConfig")
    public AliasRoutingConfiguration routingConfig;
    public AliasConfiguration withRoutingConfig(AliasRoutingConfiguration routingConfig) {
        this.routingConfig = routingConfig;
        return this;
    }
}