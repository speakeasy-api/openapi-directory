package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigSyslog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public String client;
    public ConfigSyslog withClient(String client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public ConfigSyslog withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localport")
    public Integer localport;
    public ConfigSyslog withLocalport(Integer localport) {
        this.localport = localport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("separator")
    public String separator;
    public ConfigSyslog withSeparator(String separator) {
        this.separator = separator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public Integer sequence;
    public ConfigSyslog withSequence(Integer sequence) {
        this.sequence = sequence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public String server;
    public ConfigSyslog withServer(String server) {
        this.server = server;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverport")
    public Integer serverport;
    public ConfigSyslog withServerport(Integer serverport) {
        this.serverport = serverport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public ConfigSyslog withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}