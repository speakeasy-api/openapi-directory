package openapisdk.models.shared;



/**
 * ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
 * The VPC attachment options.
**/
public class ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions {
    public java.util.Map<String, Object> applianceModeSupport;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withApplianceModeSupport(java.util.Map<String, Object> applianceModeSupport) {
        this.applianceModeSupport = applianceModeSupport;
        return this;
    }
    public java.util.Map<String, Object> dnsSupport;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withDnsSupport(java.util.Map<String, Object> dnsSupport) {
        this.dnsSupport = dnsSupport;
        return this;
    }
    public java.util.Map<String, Object> ipv6Support;
    public ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withIpv6Support(java.util.Map<String, Object> ipv6Support) {
        this.ipv6Support = ipv6Support;
        return this;
    }
}