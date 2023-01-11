package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHistoryExportsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetHistoryExportsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}