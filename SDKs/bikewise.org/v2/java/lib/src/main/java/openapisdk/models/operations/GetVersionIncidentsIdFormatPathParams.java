package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVersionIncidentsIdFormatPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetVersionIncidentsIdFormatPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}