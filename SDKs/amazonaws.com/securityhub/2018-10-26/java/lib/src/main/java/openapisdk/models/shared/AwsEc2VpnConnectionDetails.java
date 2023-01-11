package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2VpnConnectionDetails
 * Details about an Amazon EC2 VPN connection.
**/
public class AwsEc2VpnConnectionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Category")
    public String category;
    public AwsEc2VpnConnectionDetails withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerGatewayConfiguration")
    public String customerGatewayConfiguration;
    public AwsEc2VpnConnectionDetails withCustomerGatewayConfiguration(String customerGatewayConfiguration) {
        this.customerGatewayConfiguration = customerGatewayConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerGatewayId")
    public String customerGatewayId;
    public AwsEc2VpnConnectionDetails withCustomerGatewayId(String customerGatewayId) {
        this.customerGatewayId = customerGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Options")
    public AwsEc2VpnConnectionOptionsDetails options;
    public AwsEc2VpnConnectionDetails withOptions(AwsEc2VpnConnectionOptionsDetails options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Routes")
    public AwsEc2VpnConnectionRoutesDetails[] routes;
    public AwsEc2VpnConnectionDetails withRoutes(AwsEc2VpnConnectionRoutesDetails[] routes) {
        this.routes = routes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public String state;
    public AwsEc2VpnConnectionDetails withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransitGatewayId")
    public String transitGatewayId;
    public AwsEc2VpnConnectionDetails withTransitGatewayId(String transitGatewayId) {
        this.transitGatewayId = transitGatewayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public AwsEc2VpnConnectionDetails withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VgwTelemetry")
    public AwsEc2VpnConnectionVgwTelemetryDetails[] vgwTelemetry;
    public AwsEc2VpnConnectionDetails withVgwTelemetry(AwsEc2VpnConnectionVgwTelemetryDetails[] vgwTelemetry) {
        this.vgwTelemetry = vgwTelemetry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpnConnectionId")
    public String vpnConnectionId;
    public AwsEc2VpnConnectionDetails withVpnConnectionId(String vpnConnectionId) {
        this.vpnConnectionId = vpnConnectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpnGatewayId")
    public String vpnGatewayId;
    public AwsEc2VpnConnectionDetails withVpnGatewayId(String vpnGatewayId) {
        this.vpnGatewayId = vpnGatewayId;
        return this;
    }
}