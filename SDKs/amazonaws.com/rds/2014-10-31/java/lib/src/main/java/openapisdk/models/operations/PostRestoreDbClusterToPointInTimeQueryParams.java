package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbClusterToPointInTimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRestoreDbClusterToPointInTimeActionEnum action;
    public PostRestoreDbClusterToPointInTimeQueryParams withAction(PostRestoreDbClusterToPointInTimeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRestoreDbClusterToPointInTimeVersionEnum version;
    public PostRestoreDbClusterToPointInTimeQueryParams withVersion(PostRestoreDbClusterToPointInTimeVersionEnum version) {
        this.version = version;
        return this;
    }
}