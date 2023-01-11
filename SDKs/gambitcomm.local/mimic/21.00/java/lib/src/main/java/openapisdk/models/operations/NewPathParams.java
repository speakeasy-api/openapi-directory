package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IP")
    public String ip;
    public NewPathParams withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public NewPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
}