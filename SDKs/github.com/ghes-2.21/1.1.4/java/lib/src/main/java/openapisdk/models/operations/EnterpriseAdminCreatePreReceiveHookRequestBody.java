package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminCreatePreReceiveHookRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_downstream_configuration")
    public Boolean allowDownstreamConfiguration;
    public EnterpriseAdminCreatePreReceiveHookRequestBody withAllowDownstreamConfiguration(Boolean allowDownstreamConfiguration) {
        this.allowDownstreamConfiguration = allowDownstreamConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcement")
    public String enforcement;
    public EnterpriseAdminCreatePreReceiveHookRequestBody withEnforcement(String enforcement) {
        this.enforcement = enforcement;
        return this;
    }
    @JsonProperty("environment")
    public java.util.Map<String, Object> environment;
    public EnterpriseAdminCreatePreReceiveHookRequestBody withEnvironment(java.util.Map<String, Object> environment) {
        this.environment = environment;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public EnterpriseAdminCreatePreReceiveHookRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("script")
    public String script;
    public EnterpriseAdminCreatePreReceiveHookRequestBody withScript(String script) {
        this.script = script;
        return this;
    }
    @JsonProperty("script_repository")
    public java.util.Map<String, Object> scriptRepository;
    public EnterpriseAdminCreatePreReceiveHookRequestBody withScriptRepository(java.util.Map<String, Object> scriptRepository) {
        this.scriptRepository = scriptRepository;
        return this;
    }
}