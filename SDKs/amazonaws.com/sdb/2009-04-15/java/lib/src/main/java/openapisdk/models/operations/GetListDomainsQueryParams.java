package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListDomainsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AWSAccessKeyId")
    public String awsAccessKeyId;
    public GetListDomainsQueryParams withAwsAccessKeyId(String awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListDomainsActionEnum action;
    public GetListDomainsQueryParams withAction(GetListDomainsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxNumberOfDomains")
    public Long maxNumberOfDomains;
    public GetListDomainsQueryParams withMaxNumberOfDomains(Long maxNumberOfDomains) {
        this.maxNumberOfDomains = maxNumberOfDomains;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NextToken")
    public String nextToken;
    public GetListDomainsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Signature")
    public String signature;
    public GetListDomainsQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureMethod")
    public String signatureMethod;
    public GetListDomainsQueryParams withSignatureMethod(String signatureMethod) {
        this.signatureMethod = signatureMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureVersion")
    public String signatureVersion;
    public GetListDomainsQueryParams withSignatureVersion(String signatureVersion) {
        this.signatureVersion = signatureVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Timestamp")
    public String timestamp;
    public GetListDomainsQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListDomainsVersionEnum version;
    public GetListDomainsQueryParams withVersion(GetListDomainsVersionEnum version) {
        this.version = version;
        return this;
    }
}