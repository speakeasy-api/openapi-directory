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
 * GatewaySummary
 * Contains a summary of a gateway.
**/
public class GatewaySummary {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public GatewaySummary withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayCapabilitySummaries")
    public GatewayCapabilitySummary[] gatewayCapabilitySummaries;
    public GatewaySummary withGatewayCapabilitySummaries(GatewayCapabilitySummary[] gatewayCapabilitySummaries) {
        this.gatewayCapabilitySummaries = gatewayCapabilitySummaries;
        return this;
    }
    @JsonProperty("gatewayId")
    public String gatewayId;
    public GatewaySummary withGatewayId(String gatewayId) {
        this.gatewayId = gatewayId;
        return this;
    }
    @JsonProperty("gatewayName")
    public String gatewayName;
    public GatewaySummary withGatewayName(String gatewayName) {
        this.gatewayName = gatewayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gatewayPlatform")
    public GatewayPlatform gatewayPlatform;
    public GatewaySummary withGatewayPlatform(GatewayPlatform gatewayPlatform) {
        this.gatewayPlatform = gatewayPlatform;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateDate")
    public OffsetDateTime lastUpdateDate;
    public GatewaySummary withLastUpdateDate(OffsetDateTime lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
        return this;
    }
}