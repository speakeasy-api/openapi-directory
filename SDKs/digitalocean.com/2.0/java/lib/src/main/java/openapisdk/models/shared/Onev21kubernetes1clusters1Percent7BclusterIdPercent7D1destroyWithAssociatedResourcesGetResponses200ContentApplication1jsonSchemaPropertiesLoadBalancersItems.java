package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Onev21kubernetes1clusters1Percent7BclusterIdPercent7D1destroyWithAssociatedResourcesGetResponses200ContentApplication1jsonSchemaPropertiesLoadBalancersItems withName(String name) {
        this.name = name;
        return this;
    }
}