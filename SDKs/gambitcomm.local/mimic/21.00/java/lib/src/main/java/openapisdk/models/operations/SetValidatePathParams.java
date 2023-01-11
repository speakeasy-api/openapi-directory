package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetValidatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetValidatePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=validate")
    public Integer validate;
    public SetValidatePathParams withValidate(Integer validate) {
        this.validate = validate;
        return this;
    }
}