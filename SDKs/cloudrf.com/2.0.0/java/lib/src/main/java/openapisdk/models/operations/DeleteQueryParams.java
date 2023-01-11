package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cid")
    public Long cid;
    public DeleteQueryParams withCid(Long cid) {
        this.cid = cid;
        return this;
    }
}