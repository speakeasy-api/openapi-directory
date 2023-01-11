package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutObjectHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Cache-Control")
    public String cacheControl;
    public PutObjectHeaders withCacheControl(String cacheControl) {
        this.cacheControl = cacheControl;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public PutObjectHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Algorithm")
    public String xAmzAlgorithm;
    public PutObjectHeaders withXAmzAlgorithm(String xAmzAlgorithm) {
        this.xAmzAlgorithm = xAmzAlgorithm;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Content-Sha256")
    public String xAmzContentSha256;
    public PutObjectHeaders withXAmzContentSha256(String xAmzContentSha256) {
        this.xAmzContentSha256 = xAmzContentSha256;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Credential")
    public String xAmzCredential;
    public PutObjectHeaders withXAmzCredential(String xAmzCredential) {
        this.xAmzCredential = xAmzCredential;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Date")
    public String xAmzDate;
    public PutObjectHeaders withXAmzDate(String xAmzDate) {
        this.xAmzDate = xAmzDate;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Security-Token")
    public String xAmzSecurityToken;
    public PutObjectHeaders withXAmzSecurityToken(String xAmzSecurityToken) {
        this.xAmzSecurityToken = xAmzSecurityToken;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-Signature")
    public String xAmzSignature;
    public PutObjectHeaders withXAmzSignature(String xAmzSignature) {
        this.xAmzSignature = xAmzSignature;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-Amz-SignedHeaders")
    public String xAmzSignedHeaders;
    public PutObjectHeaders withXAmzSignedHeaders(String xAmzSignedHeaders) {
        this.xAmzSignedHeaders = xAmzSignedHeaders;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-amz-storage-class")
    public PutObjectXAmzStorageClassEnum xAmzStorageClass;
    public PutObjectHeaders withXAmzStorageClass(PutObjectXAmzStorageClassEnum xAmzStorageClass) {
        this.xAmzStorageClass = xAmzStorageClass;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-amz-upload-availability")
    public PutObjectXAmzUploadAvailabilityEnum xAmzUploadAvailability;
    public PutObjectHeaders withXAmzUploadAvailability(PutObjectXAmzUploadAvailabilityEnum xAmzUploadAvailability) {
        this.xAmzUploadAvailability = xAmzUploadAvailability;
        return this;
    }
}