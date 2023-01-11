package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAttachedIndicesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;
    public ListAttachedIndicesHeaders withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;
    public ListAttachedIndicesHeaders withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;
    public ListAttachedIndicesHeaders withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;
    public ListAttachedIndicesHeaders withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;
    public ListAttachedIndicesHeaders withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;
    public ListAttachedIndicesHeaders withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;
    public ListAttachedIndicesHeaders withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-amz-consistency-level")
    public ListAttachedIndicesXAmzConsistencyLevelEnum xAmzConsistencyLevel;
    public ListAttachedIndicesHeaders withXAmzConsistencyLevel(ListAttachedIndicesXAmzConsistencyLevelEnum xAmzConsistencyLevel) {
        this.xAmzConsistencyLevel = xAmzConsistencyLevel;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-amz-data-partition")
    public String xAmzDataPartition;
    public ListAttachedIndicesHeaders withXAmzDataPartition(String xAmzDataPartition) {
        this.xAmzDataPartition = xAmzDataPartition;
        return this;
    }
}