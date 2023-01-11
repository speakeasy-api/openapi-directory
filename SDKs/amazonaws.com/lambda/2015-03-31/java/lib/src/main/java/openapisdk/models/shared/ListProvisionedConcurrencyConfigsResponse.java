package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProvisionedConcurrencyConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public ListProvisionedConcurrencyConfigsResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedConcurrencyConfigs")
    public ProvisionedConcurrencyConfigListItem[] provisionedConcurrencyConfigs;
    public ListProvisionedConcurrencyConfigsResponse withProvisionedConcurrencyConfigs(ProvisionedConcurrencyConfigListItem[] provisionedConcurrencyConfigs) {
        this.provisionedConcurrencyConfigs = provisionedConcurrencyConfigs;
        return this;
    }
}