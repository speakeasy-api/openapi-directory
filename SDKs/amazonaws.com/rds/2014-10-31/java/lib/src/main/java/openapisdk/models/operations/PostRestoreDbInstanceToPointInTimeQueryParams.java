package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRestoreDbInstanceToPointInTimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRestoreDbInstanceToPointInTimeActionEnum action;
    public PostRestoreDbInstanceToPointInTimeQueryParams withAction(PostRestoreDbInstanceToPointInTimeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRestoreDbInstanceToPointInTimeVersionEnum version;
    public PostRestoreDbInstanceToPointInTimeQueryParams withVersion(PostRestoreDbInstanceToPointInTimeVersionEnum version) {
        this.version = version;
        return this;
    }
}