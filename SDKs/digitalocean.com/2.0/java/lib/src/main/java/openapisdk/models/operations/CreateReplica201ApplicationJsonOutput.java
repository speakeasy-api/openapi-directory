package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateReplica201ApplicationJsonOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replica")
    public openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput replica;
    public CreateReplica201ApplicationJsonOutput withReplica(openapisdk.models.shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput replica) {
        this.replica = replica;
        return this;
    }
}