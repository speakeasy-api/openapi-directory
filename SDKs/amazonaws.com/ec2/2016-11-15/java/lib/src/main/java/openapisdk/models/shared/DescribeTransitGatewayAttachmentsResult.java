package openapisdk.models.shared;



public class DescribeTransitGatewayAttachmentsResult {
    public java.util.Map<String, Object> nextToken;
    public DescribeTransitGatewayAttachmentsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> transitGatewayAttachments;
    public DescribeTransitGatewayAttachmentsResult withTransitGatewayAttachments(java.util.Map<String, Object> transitGatewayAttachments) {
        this.transitGatewayAttachments = transitGatewayAttachments;
        return this;
    }
}