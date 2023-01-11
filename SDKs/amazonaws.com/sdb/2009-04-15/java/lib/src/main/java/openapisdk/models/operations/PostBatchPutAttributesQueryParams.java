package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBatchPutAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AWSAccessKeyId")
    public String awsAccessKeyId;
    public PostBatchPutAttributesQueryParams withAwsAccessKeyId(String awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostBatchPutAttributesActionEnum action;
    public PostBatchPutAttributesQueryParams withAction(PostBatchPutAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Signature")
    public String signature;
    public PostBatchPutAttributesQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureMethod")
    public String signatureMethod;
    public PostBatchPutAttributesQueryParams withSignatureMethod(String signatureMethod) {
        this.signatureMethod = signatureMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureVersion")
    public String signatureVersion;
    public PostBatchPutAttributesQueryParams withSignatureVersion(String signatureVersion) {
        this.signatureVersion = signatureVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Timestamp")
    public String timestamp;
    public PostBatchPutAttributesQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostBatchPutAttributesVersionEnum version;
    public PostBatchPutAttributesQueryParams withVersion(PostBatchPutAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}