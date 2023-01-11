package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DescribeLocationObjectStorageResponse
 * DescribeLocationObjectStorageResponse
**/
public class DescribeLocationObjectStorageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessKey")
    public String accessKey;
    public DescribeLocationObjectStorageResponse withAccessKey(String accessKey) {
        this.accessKey = accessKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentArns")
    public String[] agentArns;
    public DescribeLocationObjectStorageResponse withAgentArns(String[] agentArns) {
        this.agentArns = agentArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeLocationObjectStorageResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationArn")
    public String locationArn;
    public DescribeLocationObjectStorageResponse withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationUri")
    public String locationUri;
    public DescribeLocationObjectStorageResponse withLocationUri(String locationUri) {
        this.locationUri = locationUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerPort")
    public Long serverPort;
    public DescribeLocationObjectStorageResponse withServerPort(Long serverPort) {
        this.serverPort = serverPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServerProtocol")
    public ObjectStorageServerProtocolEnum serverProtocol;
    public DescribeLocationObjectStorageResponse withServerProtocol(ObjectStorageServerProtocolEnum serverProtocol) {
        this.serverProtocol = serverProtocol;
        return this;
    }
}