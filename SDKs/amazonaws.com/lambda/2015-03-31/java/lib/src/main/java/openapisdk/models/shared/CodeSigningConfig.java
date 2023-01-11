package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CodeSigningConfig
 * Details about a <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Code signing configuration</a>. 
**/
public class CodeSigningConfig {
    @JsonProperty("AllowedPublishers")
    public AllowedPublishers allowedPublishers;
    public CodeSigningConfig withAllowedPublishers(AllowedPublishers allowedPublishers) {
        this.allowedPublishers = allowedPublishers;
        return this;
    }
    @JsonProperty("CodeSigningConfigArn")
    public String codeSigningConfigArn;
    public CodeSigningConfig withCodeSigningConfigArn(String codeSigningConfigArn) {
        this.codeSigningConfigArn = codeSigningConfigArn;
        return this;
    }
    @JsonProperty("CodeSigningConfigId")
    public String codeSigningConfigId;
    public CodeSigningConfig withCodeSigningConfigId(String codeSigningConfigId) {
        this.codeSigningConfigId = codeSigningConfigId;
        return this;
    }
    @JsonProperty("CodeSigningPolicies")
    public CodeSigningPolicies codeSigningPolicies;
    public CodeSigningConfig withCodeSigningPolicies(CodeSigningPolicies codeSigningPolicies) {
        this.codeSigningPolicies = codeSigningPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CodeSigningConfig withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("LastModified")
    public String lastModified;
    public CodeSigningConfig withLastModified(String lastModified) {
        this.lastModified = lastModified;
        return this;
    }
}