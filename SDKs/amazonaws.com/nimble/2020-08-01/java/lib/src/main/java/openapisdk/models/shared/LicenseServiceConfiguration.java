package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicenseServiceConfiguration
 * The configuration for a license service that is associated with a studio resource.
**/
public class LicenseServiceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public LicenseServiceConfiguration withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
}