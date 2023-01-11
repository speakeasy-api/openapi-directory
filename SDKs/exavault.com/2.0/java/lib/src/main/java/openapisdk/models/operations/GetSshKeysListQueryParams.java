package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSshKeysListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSshKeysListQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public GetSshKeysListQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=userId")
    public String userId;
    public GetSshKeysListQueryParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}