package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutConfigurationSetTrackingOptionsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomRedirectDomain")
    public String customRedirectDomain;
    public PutConfigurationSetTrackingOptionsRequestBody withCustomRedirectDomain(String customRedirectDomain) {
        this.customRedirectDomain = customRedirectDomain;
        return this;
    }
}