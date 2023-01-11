package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OfficesReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OfficesReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}