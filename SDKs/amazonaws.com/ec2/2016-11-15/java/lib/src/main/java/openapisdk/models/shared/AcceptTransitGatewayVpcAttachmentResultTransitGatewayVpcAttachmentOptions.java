package openapisdk.models.shared;



/**
 * AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
 * The VPC attachment options.
**/
public class AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions {
    public java.util.Map<String, Object> applianceModeSupport;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withApplianceModeSupport(java.util.Map<String, Object> applianceModeSupport) {
        this.applianceModeSupport = applianceModeSupport;
        return this;
    }
    public java.util.Map<String, Object> dnsSupport;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withDnsSupport(java.util.Map<String, Object> dnsSupport) {
        this.dnsSupport = dnsSupport;
        return this;
    }
    public java.util.Map<String, Object> ipv6Support;
    public AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withIpv6Support(java.util.Map<String, Object> ipv6Support) {
        this.ipv6Support = ipv6Support;
        return this;
    }
}