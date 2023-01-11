package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAgentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=runmode")
    public String runmode;
    public GetAgentsPathParams withRunmode(String runmode) {
        this.runmode = runmode;
        return this;
    }
}