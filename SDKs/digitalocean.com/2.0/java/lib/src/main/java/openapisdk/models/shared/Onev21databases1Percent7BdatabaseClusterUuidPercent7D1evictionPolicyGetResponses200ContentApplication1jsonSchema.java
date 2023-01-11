package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchema {
    @JsonProperty("eviction_policy")
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchemaEvictionPolicyEnum evictionPolicy;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchema withEvictionPolicy(Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchemaEvictionPolicyEnum evictionPolicy) {
        this.evictionPolicy = evictionPolicy;
        return this;
    }
}