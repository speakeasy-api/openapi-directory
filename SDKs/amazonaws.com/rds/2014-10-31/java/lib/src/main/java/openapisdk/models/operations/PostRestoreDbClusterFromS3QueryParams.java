package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbClusterFromS3QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRestoreDbClusterFromS3ActionEnum action;
    public PostRestoreDbClusterFromS3QueryParams withAction(PostRestoreDbClusterFromS3ActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRestoreDbClusterFromS3VersionEnum version;
    public PostRestoreDbClusterFromS3QueryParams withVersion(PostRestoreDbClusterFromS3VersionEnum version) {
        this.version = version;
        return this;
    }
}