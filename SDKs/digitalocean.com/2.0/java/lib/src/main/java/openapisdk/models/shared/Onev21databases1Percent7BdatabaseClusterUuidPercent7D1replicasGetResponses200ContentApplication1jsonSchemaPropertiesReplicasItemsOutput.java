package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection")
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsConnection connection;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput withConnection(Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsConnection connection) {
        this.connection = connection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_connection")
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection privateConnection;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput withPrivateConnection(Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection privateConnection) {
        this.privateConnection = privateConnection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_network_uuid")
    public String privateNetworkUuid;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput withPrivateNetworkUuid(String privateNetworkUuid) {
        this.privateNetworkUuid = privateNetworkUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum status;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput withStatus(Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsOutput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}