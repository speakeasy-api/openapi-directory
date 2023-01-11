package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLocationObjectStorageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessKey")
    public String accessKey;
    public UpdateLocationObjectStorageRequest withAccessKey(String accessKey) {
        this.accessKey = accessKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentArns")
    public String[] agentArns;
    public UpdateLocationObjectStorageRequest withAgentArns(String[] agentArns) {
        this.agentArns = agentArns;
        return this;
    }
    @JsonProperty("LocationArn")
    public String locationArn;
    public UpdateLocationObjectStorageRequest withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretKey")
    public String secretKey;
    public UpdateLocationObjectStorageRequest withSecretKey(String secretKey) {
        this.secretKey = secretKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerPort")
    public Long serverPort;
    public UpdateLocationObjectStorageRequest withServerPort(Long serverPort) {
        this.serverPort = serverPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerProtocol")
    public ObjectStorageServerProtocolEnum serverProtocol;
    public UpdateLocationObjectStorageRequest withServerProtocol(ObjectStorageServerProtocolEnum serverProtocol) {
        this.serverProtocol = serverProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subdirectory")
    public String subdirectory;
    public UpdateLocationObjectStorageRequest withSubdirectory(String subdirectory) {
        this.subdirectory = subdirectory;
        return this;
    }
}