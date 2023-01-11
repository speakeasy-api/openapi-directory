package openapisdk.models.shared;



public class DescribeTransitGatewayVpcAttachmentsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeTransitGatewayVpcAttachmentsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayVpcAttachments;
    public DescribeTransitGatewayVpcAttachmentsResult withTransitGatewayVpcAttachments(java.util.Map<String, Object> transitGatewayVpcAttachments) {
        this.transitGatewayVpcAttachments = transitGatewayVpcAttachments;
        return this;
    }
}