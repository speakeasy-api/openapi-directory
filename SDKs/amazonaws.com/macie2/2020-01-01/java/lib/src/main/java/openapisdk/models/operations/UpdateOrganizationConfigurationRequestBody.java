package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateOrganizationConfigurationRequestBody {
    @JsonProperty("autoEnable")
    public Boolean autoEnable;
    public UpdateOrganizationConfigurationRequestBody withAutoEnable(Boolean autoEnable) {
        this.autoEnable = autoEnable;
        return this;
    }
}