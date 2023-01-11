package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResetSnapshotAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResetSnapshotAttributeActionEnum action;
    public GetResetSnapshotAttributeQueryParams withAction(GetResetSnapshotAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetResetSnapshotAttributeAttributeEnum attribute;
    public GetResetSnapshotAttributeQueryParams withAttribute(GetResetSnapshotAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetResetSnapshotAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SnapshotId")
    public String snapshotId;
    public GetResetSnapshotAttributeQueryParams withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResetSnapshotAttributeVersionEnum version;
    public GetResetSnapshotAttributeQueryParams withVersion(GetResetSnapshotAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}