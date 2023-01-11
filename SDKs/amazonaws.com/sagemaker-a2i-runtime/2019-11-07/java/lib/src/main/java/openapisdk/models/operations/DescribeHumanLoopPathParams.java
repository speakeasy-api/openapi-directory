package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeHumanLoopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=HumanLoopName")
    public String humanLoopName;
    public DescribeHumanLoopPathParams withHumanLoopName(String humanLoopName) {
        this.humanLoopName = humanLoopName;
        return this;
    }
}