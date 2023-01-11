package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeInputPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=inputName")
    public String inputName;
    public DescribeInputPathParams withInputName(String inputName) {
        this.inputName = inputName;
        return this;
    }
}