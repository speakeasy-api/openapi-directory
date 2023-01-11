package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTimerScriptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public AddTimerScriptPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=arg")
    public String arg;
    public AddTimerScriptPathParams withArg(String arg) {
        this.arg = arg;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interval")
    public Integer interval;
    public AddTimerScriptPathParams withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=script")
    public String script;
    public AddTimerScriptPathParams withScript(String script) {
        this.script = script;
        return this;
    }
}