package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddDaemonTimerScriptPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=arg")
    public String arg;
    public AddDaemonTimerScriptPathParams withArg(String arg) {
        this.arg = arg;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=interval")
    public Integer interval;
    public AddDaemonTimerScriptPathParams withInterval(Integer interval) {
        this.interval = interval;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=script")
    public String script;
    public AddDaemonTimerScriptPathParams withScript(String script) {
        this.script = script;
        return this;
    }
}