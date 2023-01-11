package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDirectConnectGatewayAttachmentsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directConnectGatewayAttachments")
    public DirectConnectGatewayAttachment[] directConnectGatewayAttachments;
    public DescribeDirectConnectGatewayAttachmentsResult withDirectConnectGatewayAttachments(DirectConnectGatewayAttachment[] directConnectGatewayAttachments) {
        this.directConnectGatewayAttachments = directConnectGatewayAttachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeDirectConnectGatewayAttachmentsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}