package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public SetValuePathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=instance")
    public String instance;
    public SetValuePathParams withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public SetValuePathParams withObject(String object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=variable")
    public String variable;
    public SetValuePathParams withVariable(String variable) {
        this.variable = variable;
        return this;
    }
}