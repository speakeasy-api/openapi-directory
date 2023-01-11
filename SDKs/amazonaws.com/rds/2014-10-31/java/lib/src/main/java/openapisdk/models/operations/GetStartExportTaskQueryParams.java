package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStartExportTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStartExportTaskActionEnum action;
    public GetStartExportTaskQueryParams withAction(GetStartExportTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExportOnly")
    public String[] exportOnly;
    public GetStartExportTaskQueryParams withExportOnly(String[] exportOnly) {
        this.exportOnly = exportOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExportTaskIdentifier")
    public String exportTaskIdentifier;
    public GetStartExportTaskQueryParams withExportTaskIdentifier(String exportTaskIdentifier) {
        this.exportTaskIdentifier = exportTaskIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=IamRoleArn")
    public String iamRoleArn;
    public GetStartExportTaskQueryParams withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=KmsKeyId")
    public String kmsKeyId;
    public GetStartExportTaskQueryParams withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=S3BucketName")
    public String s3BucketName;
    public GetStartExportTaskQueryParams withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=S3Prefix")
    public String s3Prefix;
    public GetStartExportTaskQueryParams withS3Prefix(String s3Prefix) {
        this.s3Prefix = s3Prefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceArn")
    public String sourceArn;
    public GetStartExportTaskQueryParams withSourceArn(String sourceArn) {
        this.sourceArn = sourceArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStartExportTaskVersionEnum version;
    public GetStartExportTaskQueryParams withVersion(GetStartExportTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}