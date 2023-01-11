package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AWSAccessKeyId")
    public String awsAccessKeyId;
    public PostDeleteAttributesQueryParams withAwsAccessKeyId(String awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteAttributesActionEnum action;
    public PostDeleteAttributesQueryParams withAction(PostDeleteAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Signature")
    public String signature;
    public PostDeleteAttributesQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureMethod")
    public String signatureMethod;
    public PostDeleteAttributesQueryParams withSignatureMethod(String signatureMethod) {
        this.signatureMethod = signatureMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureVersion")
    public String signatureVersion;
    public PostDeleteAttributesQueryParams withSignatureVersion(String signatureVersion) {
        this.signatureVersion = signatureVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Timestamp")
    public String timestamp;
    public PostDeleteAttributesQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteAttributesVersionEnum version;
    public PostDeleteAttributesQueryParams withVersion(PostDeleteAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}