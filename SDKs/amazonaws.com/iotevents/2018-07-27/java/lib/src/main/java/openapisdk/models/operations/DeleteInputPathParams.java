package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteInputPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inputName")
    public String inputName;
    public DeleteInputPathParams withInputName(String inputName) {
        this.inputName = inputName;
        return this;
    }
}