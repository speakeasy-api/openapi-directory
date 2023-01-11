package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSelectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AWSAccessKeyId")
    public String awsAccessKeyId;
    public PostSelectQueryParams withAwsAccessKeyId(String awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSelectActionEnum action;
    public PostSelectQueryParams withAction(PostSelectActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public PostSelectQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Signature")
    public String signature;
    public PostSelectQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureMethod")
    public String signatureMethod;
    public PostSelectQueryParams withSignatureMethod(String signatureMethod) {
        this.signatureMethod = signatureMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureVersion")
    public String signatureVersion;
    public PostSelectQueryParams withSignatureVersion(String signatureVersion) {
        this.signatureVersion = signatureVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Timestamp")
    public String timestamp;
    public PostSelectQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSelectVersionEnum version;
    public PostSelectQueryParams withVersion(PostSelectVersionEnum version) {
        this.version = version;
        return this;
    }
}