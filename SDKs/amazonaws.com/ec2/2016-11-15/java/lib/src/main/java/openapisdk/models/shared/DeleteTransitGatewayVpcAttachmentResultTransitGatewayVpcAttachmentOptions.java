package openapisdk.models.shared;



/**
 * DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
 * The VPC attachment options.
**/
public class DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions {
    public java.util.Map<String, Object> applianceModeSupport;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withApplianceModeSupport(java.util.Map<String, Object> applianceModeSupport) {
        this.applianceModeSupport = applianceModeSupport;
        return this;
    }
    public java.util.Map<String, Object> dnsSupport;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withDnsSupport(java.util.Map<String, Object> dnsSupport) {
        this.dnsSupport = dnsSupport;
        return this;
    }
    public java.util.Map<String, Object> ipv6Support;
    public DeleteTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions withIpv6Support(java.util.Map<String, Object> ipv6Support) {
        this.ipv6Support = ipv6Support;
        return this;
    }
}