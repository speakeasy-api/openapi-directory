package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateJobQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=APIVersion")
    public String apiVersion;
    public GetUpdateJobQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AWSAccessKeyId")
    public String awsAccessKeyId;
    public GetUpdateJobQueryParams withAwsAccessKeyId(String awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateJobActionEnum action;
    public GetUpdateJobQueryParams withAction(GetUpdateJobActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=JobId")
    public String jobId;
    public GetUpdateJobQueryParams withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=JobType")
    public GetUpdateJobJobTypeEnum jobType;
    public GetUpdateJobQueryParams withJobType(GetUpdateJobJobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Manifest")
    public String manifest;
    public GetUpdateJobQueryParams withManifest(String manifest) {
        this.manifest = manifest;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public GetUpdateJobOperationEnum operation;
    public GetUpdateJobQueryParams withOperation(GetUpdateJobOperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Signature")
    public String signature;
    public GetUpdateJobQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureMethod")
    public String signatureMethod;
    public GetUpdateJobQueryParams withSignatureMethod(String signatureMethod) {
        this.signatureMethod = signatureMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureVersion")
    public String signatureVersion;
    public GetUpdateJobQueryParams withSignatureVersion(String signatureVersion) {
        this.signatureVersion = signatureVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Timestamp")
    public String timestamp;
    public GetUpdateJobQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ValidateOnly")
    public Boolean validateOnly;
    public GetUpdateJobQueryParams withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateJobVersionEnum version;
    public GetUpdateJobQueryParams withVersion(GetUpdateJobVersionEnum version) {
        this.version = version;
        return this;
    }
}