package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection connection;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withConnection(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection connection) {
        this.connection = connection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("db_names")
    public String[] dbNames;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withDbNames(String[] dbNames) {
        this.dbNames = dbNames;
        return this;
    }
    @JsonProperty("engine")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum engine;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withEngine(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum engine) {
        this.engine = engine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenance_window")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow maintenanceWindow;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withMaintenanceWindow(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow maintenanceWindow) {
        this.maintenanceWindow = maintenanceWindow;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("num_nodes")
    public Long numNodes;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withNumNodes(Long numNodes) {
        this.numNodes = numNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_connection")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection privateConnection;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withPrivateConnection(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection privateConnection) {
        this.privateConnection = privateConnection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_network_uuid")
    public String privateNetworkUuid;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withPrivateNetworkUuid(String privateNetworkUuid) {
        this.privateNetworkUuid = privateNetworkUuid;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonProperty("size")
    public String size;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withSize(String size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum status;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withStatus(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers[] users;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withUsers(Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers[] users) {
        this.users = users;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems withVersion(String version) {
        this.version = version;
        return this;
    }
}