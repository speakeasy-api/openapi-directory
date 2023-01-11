package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompleteMultipartUploadHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;
    public CompleteMultipartUploadHeaders withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;
    public CompleteMultipartUploadHeaders withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;
    public CompleteMultipartUploadHeaders withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;
    public CompleteMultipartUploadHeaders withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;
    public CompleteMultipartUploadHeaders withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;
    public CompleteMultipartUploadHeaders withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;
    public CompleteMultipartUploadHeaders withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-amz-archive-size")
    public String xAmzArchiveSize;
    public CompleteMultipartUploadHeaders withXAmzArchiveSize(String xAmzArchiveSize) {
        this.xAmzArchiveSize = xAmzArchiveSize;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-amz-sha256-tree-hash")
    public String xAmzSha256TreeHash;
    public CompleteMultipartUploadHeaders withXAmzSha256TreeHash(String xAmzSha256TreeHash) {
        this.xAmzSha256TreeHash = xAmzSha256TreeHash;
        return this;
    }
}