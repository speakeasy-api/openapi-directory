package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProductPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=epid")
    public String epid;
    public GetProductPathParams withEpid(String epid) {
        this.epid = epid;
        return this;
    }
}