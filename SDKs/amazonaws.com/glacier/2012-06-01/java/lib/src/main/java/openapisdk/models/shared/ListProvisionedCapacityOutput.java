package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProvisionedCapacityOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProvisionedCapacityList")
    public ProvisionedCapacityDescription[] provisionedCapacityList;
    public ListProvisionedCapacityOutput withProvisionedCapacityList(ProvisionedCapacityDescription[] provisionedCapacityList) {
        this.provisionedCapacityList = provisionedCapacityList;
        return this;
    }
}