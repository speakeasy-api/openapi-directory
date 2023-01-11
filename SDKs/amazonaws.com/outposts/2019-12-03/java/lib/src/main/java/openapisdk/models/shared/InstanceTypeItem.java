package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceTypeItem
 * Information about an instance type.
**/
public class InstanceTypeItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceType")
    public String instanceType;
    public InstanceTypeItem withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
}