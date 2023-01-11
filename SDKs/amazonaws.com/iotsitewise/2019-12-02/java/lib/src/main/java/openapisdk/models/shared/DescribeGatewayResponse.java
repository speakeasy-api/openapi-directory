package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeGatewayResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public DescribeGatewayResponse withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonProperty("gatewayArn")
    public String gatewayArn;
    public DescribeGatewayResponse withGatewayArn(String gatewayArn) {
        this.gatewayArn = gatewayArn;
        return this;
    }
    @JsonProperty("gatewayCapabilitySummaries")
    public GatewayCapabilitySummary[] gatewayCapabilitySummaries;
    public DescribeGatewayResponse withGatewayCapabilitySummaries(GatewayCapabilitySummary[] gatewayCapabilitySummaries) {
        this.gatewayCapabilitySummaries = gatewayCapabilitySummaries;
        return this;
    }
    @JsonProperty("gatewayId")
    public String gatewayId;
    public DescribeGatewayResponse withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @JsonProperty("gatewayName")
    public String gatewayName;
    public DescribeGatewayResponse withGatewayName(String gatewayName) {
        this.gatewayName = gatewayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayPlatform")
    public GatewayPlatform gatewayPlatform;
    public DescribeGatewayResponse withGatewayPlatform(GatewayPlatform gatewayPlatform) {
        this.gatewayPlatform = gatewayPlatform;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateDate")
    public OffsetDateTime lastUpdateDate;
    public DescribeGatewayResponse withLastUpdateDate(OffsetDateTime lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
        return this;
    }
}