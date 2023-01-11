package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectionPools200ApplicationJsonPools {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connection")
    public ListConnectionPools200ApplicationJsonPoolsConnection connection;
    public ListConnectionPools200ApplicationJsonPools withConnection(ListConnectionPools200ApplicationJsonPoolsConnection connection) {
        this.connection = connection;
        return this;
    }
    @JsonProperty("db")
    public String db;
    public ListConnectionPools200ApplicationJsonPools withDb(String db) {
        this.db = db;
        return this;
    }
    @JsonProperty("mode")
    public String mode;
    public ListConnectionPools200ApplicationJsonPools withMode(String mode) {
        this.mode = mode;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListConnectionPools200ApplicationJsonPools withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_connection")
    public ListConnectionPools200ApplicationJsonPoolsPrivateConnection privateConnection;
    public ListConnectionPools200ApplicationJsonPools withPrivateConnection(ListConnectionPools200ApplicationJsonPoolsPrivateConnection privateConnection) {
        this.privateConnection = privateConnection;
        return this;
    }
    @JsonProperty("size")
    public Integer size;
    public ListConnectionPools200ApplicationJsonPools withSize(Integer size) {
        this.size = size;
        return this;
    }
    @JsonProperty("user")
    public String user;
    public ListConnectionPools200ApplicationJsonPools withUser(String user) {
        this.user = user;
        return this;
    }
}