package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public CreateProjectQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=region")
    public String region;
    public CreateProjectQueryParams withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=snapshotId")
    public String snapshotId;
    public CreateProjectQueryParams withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
}