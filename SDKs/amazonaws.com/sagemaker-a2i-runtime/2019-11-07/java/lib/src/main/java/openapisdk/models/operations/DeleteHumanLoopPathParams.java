package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteHumanLoopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=HumanLoopName")
    public String humanLoopName;
    public DeleteHumanLoopPathParams withHumanLoopName(String humanLoopName) {
        this.humanLoopName = humanLoopName;
        return this;
    }
}