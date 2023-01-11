package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BotAliasLocaleSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("codeHookSpecification")
    public CodeHookSpecification codeHookSpecification;
    public BotAliasLocaleSettings withCodeHookSpecification(CodeHookSpecification codeHookSpecification) {
        this.codeHookSpecification = codeHookSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public BotAliasLocaleSettings withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}