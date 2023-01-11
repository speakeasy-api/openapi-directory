package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database")
    public String database;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssl")
    public Boolean ssl;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection withSsl(Boolean ssl) {
        this.ssl = ssl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public Onev21databases1Percent7BdatabaseClusterUuidPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItemsPrivateConnection withUser(String user) {
        this.user = user;
        return this;
    }
}