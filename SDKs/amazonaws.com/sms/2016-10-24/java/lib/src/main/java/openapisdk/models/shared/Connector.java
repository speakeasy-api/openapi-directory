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
 * Connector
 * Represents a connector.
**/
public class Connector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("associatedOn")
    public OffsetDateTime associatedOn;
    public Connector withAssociatedOn(OffsetDateTime associatedOn) {
        this.associatedOn = associatedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capabilityList")
    public ConnectorCapabilityEnum[] capabilityList;
    public Connector withCapabilityList(ConnectorCapabilityEnum[] capabilityList) {
        this.capabilityList = capabilityList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorId")
    public String connectorId;
    public Connector withConnectorId(String connectorId) {
        this.connectorId = connectorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddress")
    public String ipAddress;
    public Connector withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macAddress")
    public String macAddress;
    public Connector withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ConnectorStatusEnum status;
    public Connector withStatus(ConnectorStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Connector withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmManagerId")
    public String vmManagerId;
    public Connector withVmManagerId(String vmManagerId) {
        this.vmManagerId = vmManagerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmManagerName")
    public String vmManagerName;
    public Connector withVmManagerName(String vmManagerName) {
        this.vmManagerName = vmManagerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmManagerType")
    public VmManagerTypeEnum vmManagerType;
    public Connector withVmManagerType(VmManagerTypeEnum vmManagerType) {
        this.vmManagerType = vmManagerType;
        return this;
    }
}