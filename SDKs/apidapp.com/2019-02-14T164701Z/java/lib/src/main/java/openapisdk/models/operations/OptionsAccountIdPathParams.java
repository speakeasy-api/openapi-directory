package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptionsAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OptionsAccountIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}