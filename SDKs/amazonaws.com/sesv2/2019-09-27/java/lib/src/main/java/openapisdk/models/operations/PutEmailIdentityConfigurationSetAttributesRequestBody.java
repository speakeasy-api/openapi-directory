package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutEmailIdentityConfigurationSetAttributesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationSetName")
    public String configurationSetName;
    public PutEmailIdentityConfigurationSetAttributesRequestBody withConfigurationSetName(String configurationSetName) {
        this.configurationSetName = configurationSetName;
        return this;
    }
}