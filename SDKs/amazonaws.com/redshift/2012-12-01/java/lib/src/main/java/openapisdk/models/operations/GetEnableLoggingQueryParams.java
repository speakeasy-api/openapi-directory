package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnableLoggingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnableLoggingActionEnum action;
    public GetEnableLoggingQueryParams withAction(GetEnableLoggingActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BucketName")
    public String bucketName;
    public GetEnableLoggingQueryParams withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClusterIdentifier")
    public String clusterIdentifier;
    public GetEnableLoggingQueryParams withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=S3KeyPrefix")
    public String s3KeyPrefix;
    public GetEnableLoggingQueryParams withS3KeyPrefix(String s3KeyPrefix) {
        this.s3KeyPrefix = s3KeyPrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnableLoggingVersionEnum version;
    public GetEnableLoggingQueryParams withVersion(GetEnableLoggingVersionEnum version) {
        this.version = version;
        return this;
    }
}