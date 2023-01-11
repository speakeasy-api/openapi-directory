package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicListOfValuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=listName")
    public String listName;
    public GetPublicListOfValuesPathParams withListName(String listName) {
        this.listName = listName;
        return this;
    }
}