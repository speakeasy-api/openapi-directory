package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateConfigurationItemsFromApplicationRequest {
    @JsonProperty("applicationConfigurationId")
    public String applicationConfigurationId;
    public DisassociateConfigurationItemsFromApplicationRequest withApplicationConfigurationId(String applicationConfigurationId) {
        this.applicationConfigurationId = applicationConfigurationId;
        return this;
    }
    @JsonProperty("configurationIds")
    public String[] configurationIds;
    public DisassociateConfigurationItemsFromApplicationRequest withConfigurationIds(String[] configurationIds) {
        this.configurationIds = configurationIds;
        return this;
    }
}