package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseOverviewHooks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_hooks")
    public Long activeHooks;
    public EnterpriseOverviewHooks withActiveHooks(Long activeHooks) {
        this.activeHooks = activeHooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inactive_hooks")
    public Long inactiveHooks;
    public EnterpriseOverviewHooks withInactiveHooks(Long inactiveHooks) {
        this.inactiveHooks = inactiveHooks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_hooks")
    public Long totalHooks;
    public EnterpriseOverviewHooks withTotalHooks(Long totalHooks) {
        this.totalHooks = totalHooks;
        return this;
    }
}