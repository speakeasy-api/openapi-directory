package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInputPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inputName")
    public String inputName;
    public UpdateInputPathParams withInputName(String inputName) {
        this.inputName = inputName;
        return this;
    }
}