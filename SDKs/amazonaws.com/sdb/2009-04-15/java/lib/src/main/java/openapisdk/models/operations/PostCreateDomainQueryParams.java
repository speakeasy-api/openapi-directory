package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AWSAccessKeyId")
    public String awsAccessKeyId;
    public PostCreateDomainQueryParams withAwsAccessKeyId(String awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDomainActionEnum action;
    public PostCreateDomainQueryParams withAction(PostCreateDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Signature")
    public String signature;
    public PostCreateDomainQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureMethod")
    public String signatureMethod;
    public PostCreateDomainQueryParams withSignatureMethod(String signatureMethod) {
        this.signatureMethod = signatureMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureVersion")
    public String signatureVersion;
    public PostCreateDomainQueryParams withSignatureVersion(String signatureVersion) {
        this.signatureVersion = signatureVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Timestamp")
    public String timestamp;
    public PostCreateDomainQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDomainVersionEnum version;
    public PostCreateDomainQueryParams withVersion(PostCreateDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}