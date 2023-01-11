package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseSettingsEnterpriseCas {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public EnterpriseSettingsEnterpriseCas withUrl(String url) {
        this.url = url;
        return this;
    }
}