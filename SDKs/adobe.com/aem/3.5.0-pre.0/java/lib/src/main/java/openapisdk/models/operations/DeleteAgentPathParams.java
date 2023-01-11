package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAgentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DeleteAgentPathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runmode")
    public String runmode;
    public DeleteAgentPathParams withRunmode(String runmode) {
        this.runmode = runmode;
        return this;
    }
}