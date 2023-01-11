package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enterprise")
    public EnterpriseSettingsEnterprise enterprise;
    public EnterpriseSettings withEnterprise(EnterpriseSettingsEnterprise enterprise) {
        this.enterprise = enterprise;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_list")
    public String[] runList;
    public EnterpriseSettings withRunList(String[] runList) {
        this.runList = runList;
        return this;
    }
}