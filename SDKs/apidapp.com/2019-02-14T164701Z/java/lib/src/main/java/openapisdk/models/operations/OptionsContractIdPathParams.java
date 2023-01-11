package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptionsContractIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OptionsContractIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}