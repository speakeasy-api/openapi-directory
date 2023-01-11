package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecurityServicePolicyData
 * Details about the security service that is being used to protect the resources.
**/
public class SecurityServicePolicyData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ManagedServiceData")
    public String managedServiceData;
    public SecurityServicePolicyData withManagedServiceData(String managedServiceData) {
        this.managedServiceData = managedServiceData;
        return this;
    }
    @JsonProperty("Type")
    public SecurityServiceTypeEnum type;
    public SecurityServicePolicyData withType(SecurityServiceTypeEnum type) {
        this.type = type;
        return this;
    }
}