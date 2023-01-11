package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListIpaliasesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public ListIpaliasesPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}