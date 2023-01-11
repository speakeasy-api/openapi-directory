package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRemoteServersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetRemoteServersIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}