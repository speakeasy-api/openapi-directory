package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminUpdatePreReceiveHookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_downstream_configuration")
    public Boolean allowDownstreamConfiguration;
    public EnterpriseAdminUpdatePreReceiveHookRequestBody withAllowDownstreamConfiguration(Boolean allowDownstreamConfiguration) {
        this.allowDownstreamConfiguration = allowDownstreamConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcement")
    public String enforcement;
    public EnterpriseAdminUpdatePreReceiveHookRequestBody withEnforcement(String enforcement) {
        this.enforcement = enforcement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public java.util.Map<String, Object> environment;
    public EnterpriseAdminUpdatePreReceiveHookRequestBody withEnvironment(java.util.Map<String, Object> environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EnterpriseAdminUpdatePreReceiveHookRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script")
    public String script;
    public EnterpriseAdminUpdatePreReceiveHookRequestBody withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script_repository")
    public java.util.Map<String, Object> scriptRepository;
    public EnterpriseAdminUpdatePreReceiveHookRequestBody withScriptRepository(java.util.Map<String, Object> scriptRepository) {
        this.scriptRepository = scriptRepository;
        return this;
    }
}