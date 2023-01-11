package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUpdatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ListUpdatesPathParams withName(String name) {
        this.name = name;
        return this;
    }
}