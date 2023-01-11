package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartMigrationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostStartMigrationActionEnum action;
    public PostStartMigrationQueryParams withAction(PostStartMigrationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostStartMigrationVersionEnum version;
    public PostStartMigrationQueryParams withVersion(PostStartMigrationVersionEnum version) {
        this.version = version;
        return this;
    }
}