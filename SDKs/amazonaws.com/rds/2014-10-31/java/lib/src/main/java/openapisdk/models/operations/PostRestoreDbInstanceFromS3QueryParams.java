package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbInstanceFromS3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRestoreDbInstanceFromS3ActionEnum action;
    public PostRestoreDbInstanceFromS3QueryParams withAction(PostRestoreDbInstanceFromS3ActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRestoreDbInstanceFromS3VersionEnum version;
    public PostRestoreDbInstanceFromS3QueryParams withVersion(PostRestoreDbInstanceFromS3VersionEnum version) {
        this.version = version;
        return this;
    }
}