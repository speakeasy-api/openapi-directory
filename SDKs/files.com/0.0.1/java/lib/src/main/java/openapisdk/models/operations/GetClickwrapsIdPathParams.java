package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClickwrapsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetClickwrapsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}