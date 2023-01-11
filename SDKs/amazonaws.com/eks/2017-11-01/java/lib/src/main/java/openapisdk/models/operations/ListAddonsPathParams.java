package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAddonsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ListAddonsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}