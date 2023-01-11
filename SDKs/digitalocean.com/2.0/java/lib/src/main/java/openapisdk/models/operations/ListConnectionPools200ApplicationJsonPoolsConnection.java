package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConnectionPools200ApplicationJsonPoolsConnection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database")
    public String database;
    public ListConnectionPools200ApplicationJsonPoolsConnection withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public ListConnectionPools200ApplicationJsonPoolsConnection withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public ListConnectionPools200ApplicationJsonPoolsConnection withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Long port;
    public ListConnectionPools200ApplicationJsonPoolsConnection withPort(Long port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssl")
    public Boolean ssl;
    public ListConnectionPools200ApplicationJsonPoolsConnection withSsl(Boolean ssl) {
        this.ssl = ssl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public ListConnectionPools200ApplicationJsonPoolsConnection withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public String user;
    public ListConnectionPools200ApplicationJsonPoolsConnection withUser(String user) {
        this.user = user;
        return this;
    }
}