package openapisdk.models.shared;



/**
 * RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
 * The VPC attachment options.
**/
public class RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions {
    public java.util.Map<String, Object> applianceModeSupport;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withApplianceModeSupport(java.util.Map<String, Object> applianceModeSupport) {
        this.applianceModeSupport = applianceModeSupport;
        return this;
    }
    public java.util.Map<String, Object> dnsSupport;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withDnsSupport(java.util.Map<String, Object> dnsSupport) {
        this.dnsSupport = dnsSupport;
        return this;
    }
    public java.util.Map<String, Object> ipv6Support;
    public RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withIpv6Support(java.util.Map<String, Object> ipv6Support) {
        this.ipv6Support = ipv6Support;
        return this;
    }
}