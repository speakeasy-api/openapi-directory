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
 * DescribeAgentResponse
 * DescribeAgentResponse
**/
public class DescribeAgentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentArn")
    public String agentArn;
    public DescribeAgentResponse withAgentArn(String agentArn) {
        this.agentArn = agentArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeAgentResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointType")
    public EndpointTypeEnum endpointType;
    public DescribeAgentResponse withEndpointType(EndpointTypeEnum endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastConnectionTime")
    public OffsetDateTime lastConnectionTime;
    public DescribeAgentResponse withLastConnectionTime(OffsetDateTime lastConnectionTime) {
        this.lastConnectionTime = lastConnectionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DescribeAgentResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivateLinkConfig")
    public PrivateLinkConfig privateLinkConfig;
    public DescribeAgentResponse withPrivateLinkConfig(PrivateLinkConfig privateLinkConfig) {
        this.privateLinkConfig = privateLinkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public AgentStatusEnum status;
    public DescribeAgentResponse withStatus(AgentStatusEnum status) {
        this.status = status;
        return this;
    }
}