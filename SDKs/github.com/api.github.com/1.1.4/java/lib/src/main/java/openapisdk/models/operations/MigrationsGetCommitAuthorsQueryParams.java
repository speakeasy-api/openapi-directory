package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MigrationsGetCommitAuthorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public Long since;
    public MigrationsGetCommitAuthorsQueryParams withSince(Long since) {
        this.since = since;
        return this;
    }
}