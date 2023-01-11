package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyDbSnapshotQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyDbSnapshotActionEnum action;
    public GetModifyDbSnapshotQueryParams withAction(GetModifyDbSnapshotActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBSnapshotIdentifier")
    public String dbSnapshotIdentifier;
    public GetModifyDbSnapshotQueryParams withDbSnapshotIdentifier(String dbSnapshotIdentifier) {
        this.dbSnapshotIdentifier = dbSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EngineVersion")
    public String engineVersion;
    public GetModifyDbSnapshotQueryParams withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=OptionGroupName")
    public String optionGroupName;
    public GetModifyDbSnapshotQueryParams withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyDbSnapshotVersionEnum version;
    public GetModifyDbSnapshotQueryParams withVersion(GetModifyDbSnapshotVersionEnum version) {
        this.version = version;
        return this;
    }
}