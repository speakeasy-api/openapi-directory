package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserListOfValuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=listName")
    public String listName;
    public GetUserListOfValuesPathParams withListName(String listName) {
        this.listName = listName;
        return this;
    }
}