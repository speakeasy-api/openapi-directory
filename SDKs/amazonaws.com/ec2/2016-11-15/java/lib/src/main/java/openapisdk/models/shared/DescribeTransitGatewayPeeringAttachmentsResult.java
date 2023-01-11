package openapisdk.models.shared;



public class DescribeTransitGatewayPeeringAttachmentsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeTransitGatewayPeeringAttachmentsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayPeeringAttachments;
    public DescribeTransitGatewayPeeringAttachmentsResult withTransitGatewayPeeringAttachments(java.util.Map<String, Object> transitGatewayPeeringAttachments) {
        this.transitGatewayPeeringAttachments = transitGatewayPeeringAttachments;
        return this;
    }
}