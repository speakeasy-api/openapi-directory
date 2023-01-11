package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DelDaemonTimerScriptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=arg")
    public String arg;
    public DelDaemonTimerScriptPathParams withArg(String arg) {
        this.arg = arg;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interval")
    public Integer interval;
    public DelDaemonTimerScriptPathParams withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=script")
    public String script;
    public DelDaemonTimerScriptPathParams withScript(String script) {
        this.script = script;
        return this;
    }
}