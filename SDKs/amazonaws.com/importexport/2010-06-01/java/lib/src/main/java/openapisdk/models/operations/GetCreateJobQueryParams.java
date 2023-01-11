package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateJobQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=APIVersion")
    public String apiVersion;
    public GetCreateJobQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AWSAccessKeyId")
    public String awsAccessKeyId;
    public GetCreateJobQueryParams withAwsAccessKeyId(String awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateJobActionEnum action;
    public GetCreateJobQueryParams withAction(GetCreateJobActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=JobType")
    public GetCreateJobJobTypeEnum jobType;
    public GetCreateJobQueryParams withJobType(GetCreateJobJobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Manifest")
    public String manifest;
    public GetCreateJobQueryParams withManifest(String manifest) {
        this.manifest = manifest;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ManifestAddendum")
    public String manifestAddendum;
    public GetCreateJobQueryParams withManifestAddendum(String manifestAddendum) {
        this.manifestAddendum = manifestAddendum;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public GetCreateJobOperationEnum operation;
    public GetCreateJobQueryParams withOperation(GetCreateJobOperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Signature")
    public String signature;
    public GetCreateJobQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureMethod")
    public String signatureMethod;
    public GetCreateJobQueryParams withSignatureMethod(String signatureMethod) {
        this.signatureMethod = signatureMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureVersion")
    public String signatureVersion;
    public GetCreateJobQueryParams withSignatureVersion(String signatureVersion) {
        this.signatureVersion = signatureVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Timestamp")
    public String timestamp;
    public GetCreateJobQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ValidateOnly")
    public Boolean validateOnly;
    public GetCreateJobQueryParams withValidateOnly(Boolean validateOnly) {
        this.validateOnly = validateOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateJobVersionEnum version;
    public GetCreateJobQueryParams withVersion(GetCreateJobVersionEnum version) {
        this.version = version;
        return this;
    }
}