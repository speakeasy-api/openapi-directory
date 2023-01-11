package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectionPools200ApplicationJsonPoolsPrivateConnection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database")
    public String database;
    public ListConnectionPools200ApplicationJsonPoolsPrivateConnection withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public ListConnectionPools200ApplicationJsonPoolsPrivateConnection withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public ListConnectionPools200ApplicationJsonPoolsPrivateConnection withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public ListConnectionPools200ApplicationJsonPoolsPrivateConnection withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssl")
    public Boolean ssl;
    public ListConnectionPools200ApplicationJsonPoolsPrivateConnection withSsl(Boolean ssl) {
        this.ssl = ssl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListConnectionPools200ApplicationJsonPoolsPrivateConnection withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public ListConnectionPools200ApplicationJsonPoolsPrivateConnection withUser(String user) {
        this.user = user;
        return this;
    }
}