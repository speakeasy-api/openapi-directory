package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_downstream_configuration")
    public Boolean allowDownstreamConfiguration;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody withAllowDownstreamConfiguration(Boolean allowDownstreamConfiguration) {
        this.allowDownstreamConfiguration = allowDownstreamConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcement")
    public String enforcement;
    public EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody withEnforcement(String enforcement) {
        this.enforcement = enforcement;
        return this;
    }
}