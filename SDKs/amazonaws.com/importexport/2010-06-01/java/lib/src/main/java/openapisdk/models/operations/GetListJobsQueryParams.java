package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListJobsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=APIVersion")
    public String apiVersion;
    public GetListJobsQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AWSAccessKeyId")
    public String awsAccessKeyId;
    public GetListJobsQueryParams withAwsAccessKeyId(String awsAccessKeyId) {
        this.awsAccessKeyId = awsAccessKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListJobsActionEnum action;
    public GetListJobsQueryParams withAction(GetListJobsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListJobsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxJobs")
    public Long maxJobs;
    public GetListJobsQueryParams withMaxJobs(Long maxJobs) {
        this.maxJobs = maxJobs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Operation")
    public GetListJobsOperationEnum operation;
    public GetListJobsQueryParams withOperation(GetListJobsOperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Signature")
    public String signature;
    public GetListJobsQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureMethod")
    public String signatureMethod;
    public GetListJobsQueryParams withSignatureMethod(String signatureMethod) {
        this.signatureMethod = signatureMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SignatureVersion")
    public String signatureVersion;
    public GetListJobsQueryParams withSignatureVersion(String signatureVersion) {
        this.signatureVersion = signatureVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Timestamp")
    public String timestamp;
    public GetListJobsQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListJobsVersionEnum version;
    public GetListJobsQueryParams withVersion(GetListJobsVersionEnum version) {
        this.version = version;
        return this;
    }
}