package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigProxy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TCP_NODELAY")
    public Integer tcpNODELAY;
    public ConfigProxy withTcpNodelay(Integer tcpNODELAY) {
        this.tcpNODELAY = tcpNODELAY;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_to_server")
    public String clientToServer;
    public ConfigProxy withClientToServer(String clientToServer) {
        this.clientToServer = clientToServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disconnect_delay")
    public Integer disconnectDelay;
    public ConfigProxy withDisconnectDelay(Integer disconnectDelay) {
        this.disconnectDelay = disconnectDelay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_connects")
    public Integer maxConnects;
    public ConfigProxy withMaxConnects(Integer maxConnects) {
        this.maxConnects = maxConnects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portno")
    public Integer portno;
    public ConfigProxy withPortno(Integer portno) {
        this.portno = portno;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pre_connect")
    public String preConnect;
    public ConfigProxy withPreConnect(String preConnect) {
        this.preConnect = preConnect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server_to_client")
    public String serverToClient;
    public ConfigProxy withServerToClient(String serverToClient) {
        this.serverToClient = serverToClient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("target")
    public String target;
    public ConfigProxy withTarget(String target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport")
    public String transport;
    public ConfigProxy withTransport(String transport) {
        this.transport = transport;
        return this;
    }
}