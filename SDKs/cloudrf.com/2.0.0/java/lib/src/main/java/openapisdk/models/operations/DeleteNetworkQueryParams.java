package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nid")
    public String nid;
    public DeleteNetworkQueryParams withNid(String nid) {
        this.nid = nid;
        return this;
    }
}