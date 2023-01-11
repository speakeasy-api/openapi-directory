package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CfgNewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=firstAgentNum")
    public Integer firstAgentNum;
    public CfgNewPathParams withFirstAgentNum(Integer firstAgentNum) {
        this.firstAgentNum = firstAgentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lastAgentNum")
    public Integer lastAgentNum;
    public CfgNewPathParams withLastAgentNum(Integer lastAgentNum) {
        this.lastAgentNum = lastAgentNum;
        return this;
    }
}