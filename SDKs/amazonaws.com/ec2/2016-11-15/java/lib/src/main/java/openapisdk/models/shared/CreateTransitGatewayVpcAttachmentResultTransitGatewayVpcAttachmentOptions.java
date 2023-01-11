package openapisdk.models.shared;



/**
 * CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
 * The VPC attachment options.
**/
public class CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions {
    public java.util.Map<String, Object> applianceModeSupport;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withApplianceModeSupport(java.util.Map<String, Object> applianceModeSupport) {
        this.applianceModeSupport = applianceModeSupport;
        return this;
    }
    public java.util.Map<String, Object> dnsSupport;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withDnsSupport(java.util.Map<String, Object> dnsSupport) {
        this.dnsSupport = dnsSupport;
        return this;
    }
    public java.util.Map<String, Object> ipv6Support;
    public CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withIpv6Support(java.util.Map<String, Object> ipv6Support) {
        this.ipv6Support = ipv6Support;
        return this;
    }
}