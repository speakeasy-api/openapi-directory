package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DelTimerScriptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=agentNum")
    public Integer agentNum;
    public DelTimerScriptPathParams withAgentNum(Integer agentNum) {
        this.agentNum = agentNum;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=arg")
    public String arg;
    public DelTimerScriptPathParams withArg(String arg) {
        this.arg = arg;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interval")
    public Integer interval;
    public DelTimerScriptPathParams withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=script")
    public String script;
    public DelTimerScriptPathParams withScript(String script) {
        this.script = script;
        return this;
    }
}