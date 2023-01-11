package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCompleteMigrationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCompleteMigrationActionEnum action;
    public PostCompleteMigrationQueryParams withAction(PostCompleteMigrationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCompleteMigrationVersionEnum version;
    public PostCompleteMigrationQueryParams withVersion(PostCompleteMigrationVersionEnum version) {
        this.version = version;
        return this;
    }
}