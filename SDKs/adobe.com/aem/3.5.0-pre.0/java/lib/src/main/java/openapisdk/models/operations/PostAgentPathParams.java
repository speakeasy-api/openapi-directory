package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAgentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PostAgentPathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runmode")
    public String runmode;
    public PostAgentPathParams withRunmode(String runmode) {
        this.runmode = runmode;
        return this;
    }
}