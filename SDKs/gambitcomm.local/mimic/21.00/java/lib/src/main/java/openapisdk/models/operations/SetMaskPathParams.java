package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetMaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Long agentNum;
    public SetMaskPathParams withAgentNum(Long agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mask")
    public String mask;
    public SetMaskPathParams withMask(String mask) {
        this.mask = mask;
        return this;
    }
}