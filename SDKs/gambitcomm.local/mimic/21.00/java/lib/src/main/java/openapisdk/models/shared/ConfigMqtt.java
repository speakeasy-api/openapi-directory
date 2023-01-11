package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigMqtt {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("broker")
    public String broker;
    public ConfigMqtt withBroker(String broker) {
        this.broker = broker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientid")
    public String clientid;
    public ConfigMqtt withClientid(String clientid) {
        this.clientid = clientid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filename")
    public String filename;
    public ConfigMqtt withFilename(String filename) {
        this.filename = filename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_tls")
    public String isTls;
    public ConfigMqtt withIsTls(String isTls) {
        this.isTls = isTls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public ConfigMqtt withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public ConfigMqtt withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tls_conf_filename")
    public String tlsConfFilename;
    public ConfigMqtt withTlsConfFilename(String tlsConfFilename) {
        this.tlsConfFilename = tlsConfFilename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public ConfigMqtt withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ConfigMqtt withVersion(String version) {
        this.version = version;
        return this;
    }
}