package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database")
    public String database;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssl")
    public Boolean ssl;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection withSsl(Boolean ssl) {
        this.ssl = ssl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection withUser(String user) {
        this.user = user;
        return this;
    }
}