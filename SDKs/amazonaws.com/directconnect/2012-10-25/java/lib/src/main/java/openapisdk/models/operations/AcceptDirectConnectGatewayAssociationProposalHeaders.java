package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptDirectConnectGatewayAssociationProposalHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;
    public AcceptDirectConnectGatewayAssociationProposalHeaders withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;
    public AcceptDirectConnectGatewayAssociationProposalHeaders withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;
    public AcceptDirectConnectGatewayAssociationProposalHeaders withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;
    public AcceptDirectConnectGatewayAssociationProposalHeaders withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;
    public AcceptDirectConnectGatewayAssociationProposalHeaders withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;
    public AcceptDirectConnectGatewayAssociationProposalHeaders withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;
    public AcceptDirectConnectGatewayAssociationProposalHeaders withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Target")
    public AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum xAmzTarget;
    public AcceptDirectConnectGatewayAssociationProposalHeaders withXAmzTarget(AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum xAmzTarget) {
        this.xAmzTarget = xAmzTarget;
        return this;
    }
}