package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster_uuid")
    public String clusterUuid;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput withClusterUuid(String clusterUuid) {
        this.clusterUuid = clusterUuid;
        return this;
    }
    @JsonProperty("type")
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum type;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput withType(Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsInput withValue(String value) {
        this.value = value;
        return this;
    }
}