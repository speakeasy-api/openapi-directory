package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbInstanceAutomatedBackupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbInstanceAutomatedBackupActionEnum action;
    public PostDeleteDbInstanceAutomatedBackupQueryParams withAction(PostDeleteDbInstanceAutomatedBackupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbInstanceAutomatedBackupVersionEnum version;
    public PostDeleteDbInstanceAutomatedBackupQueryParams withVersion(PostDeleteDbInstanceAutomatedBackupVersionEnum version) {
        this.version = version;
        return this;
    }
}