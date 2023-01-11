package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFunctions20200531QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListFunctions20200531QueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public ListFunctions20200531QueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Stage")
    public ListFunctions20200531StageEnum stage;
    public ListFunctions20200531QueryParams withStage(ListFunctions20200531StageEnum stage) {
        this.stage = stage;
        return this;
    }
}