package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection")
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsConnection connection;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1 withConnection(Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsConnection connection) {
        this.connection = connection;
        return this;
    }
    @JsonProperty("db")
    public String db;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1 withDb(String db) {
        this.db = db;
        return this;
    }
    @JsonProperty("mode")
    public String mode;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1 withMode(String mode) {
        this.mode = mode;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_connection")
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsPrivateConnection privateConnection;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1 withPrivateConnection(Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItemsPrivateConnection privateConnection) {
        this.privateConnection = privateConnection;
        return this;
    }
    @JsonProperty("size")
    public Integer size;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1 withSize(Integer size) {
        this.size = size;
        return this;
    }
    @JsonProperty("user")
    public String user;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems1 withUser(String user) {
        this.user = user;
        return this;
    }
}