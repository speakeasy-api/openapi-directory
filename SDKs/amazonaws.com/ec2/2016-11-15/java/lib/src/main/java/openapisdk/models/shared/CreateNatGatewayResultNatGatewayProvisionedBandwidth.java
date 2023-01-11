package openapisdk.models.shared;



/**
 * CreateNatGatewayResultNatGatewayProvisionedBandwidth
 * Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.
**/
public class CreateNatGatewayResultNatGatewayProvisionedBandwidth {
    public java.util.Map<String, Object> provisionTime;
    public CreateNatGatewayResultNatGatewayProvisionedBandwidth withProvisionTime(java.util.Map<String, Object> provisionTime) {
        this.provisionTime = provisionTime;
        return this;
    }
    public java.util.Map<String, Object> provisioned;
    public CreateNatGatewayResultNatGatewayProvisionedBandwidth withProvisioned(java.util.Map<String, Object> provisioned) {
        this.provisioned = provisioned;
        return this;
    }
    public java.util.Map<String, Object> requestTime;
    public CreateNatGatewayResultNatGatewayProvisionedBandwidth withRequestTime(java.util.Map<String, Object> requestTime) {
        this.requestTime = requestTime;
        return this;
    }
    public java.util.Map<String, Object> requested;
    public CreateNatGatewayResultNatGatewayProvisionedBandwidth withRequested(java.util.Map<String, Object> requested) {
        this.requested = requested;
        return this;
    }
    public java.util.Map<String, Object> status;
    public CreateNatGatewayResultNatGatewayProvisionedBandwidth withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
}