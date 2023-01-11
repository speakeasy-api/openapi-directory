package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Service
 * The metadata for a service, such as the service code and available attribute names.
**/
public class Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeNames")
    public String[] attributeNames;
    public Service withAttributeNames(String[] attributeNames) {
        this.attributeNames = attributeNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceCode")
    public String serviceCode;
    public Service withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}