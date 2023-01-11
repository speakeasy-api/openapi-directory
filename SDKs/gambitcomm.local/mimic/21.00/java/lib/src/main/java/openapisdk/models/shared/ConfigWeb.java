package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigWeb {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_persistent_connections")
    public Integer isPersistentConnections;
    public ConfigWeb withIsPersistentConnections(Integer isPersistentConnections) {
        this.isPersistentConnections = isPersistentConnections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public ConfigWeb withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public ConfigWeb withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public String rule;
    public ConfigWeb withRule(String rule) {
        this.rule = rule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public ConfigWeb withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wsdl")
    public String wsdl;
    public ConfigWeb withWsdl(String wsdl) {
        this.wsdl = wsdl;
        return this;
    }
}