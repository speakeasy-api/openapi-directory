package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GatewayRouteRef
 * An object that represents a gateway route returned by a list operation.
**/
public class GatewayRouteRef {
    @JsonProperty("arn")
    public String arn;
    public GatewayRouteRef withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public GatewayRouteRef withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("gatewayRouteName")
    public String gatewayRouteName;
    public GatewayRouteRef withGatewayRouteName(String gatewayRouteName) {
        this.gatewayRouteName = gatewayRouteName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public GatewayRouteRef withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonProperty("meshName")
    public String meshName;
    public GatewayRouteRef withMeshName(String meshName) {
        this.meshName = meshName;
        return this;
    }
    @JsonProperty("meshOwner")
    public String meshOwner;
    public GatewayRouteRef withMeshOwner(String meshOwner) {
        this.meshOwner = meshOwner;
        return this;
    }
    @JsonProperty("resourceOwner")
    public String resourceOwner;
    public GatewayRouteRef withResourceOwner(String resourceOwner) {
        this.resourceOwner = resourceOwner;
        return this;
    }
    @JsonProperty("version")
    public Long version;
    public GatewayRouteRef withVersion(Long version) {
        this.version = version;
        return this;
    }
    @JsonProperty("virtualGatewayName")
    public String virtualGatewayName;
    public GatewayRouteRef withVirtualGatewayName(String virtualGatewayName) {
        this.virtualGatewayName = virtualGatewayName;
        return this;
    }
}