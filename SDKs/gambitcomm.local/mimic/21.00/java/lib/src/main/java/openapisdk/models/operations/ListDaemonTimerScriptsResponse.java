package openapisdk.models.operations;



public class ListDaemonTimerScriptsResponse {
    public String contentType;
    public ListDaemonTimerScriptsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListDaemonTimerScriptsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TimerScript[] timerScripts;
    public ListDaemonTimerScriptsResponse withTimerScripts(openapisdk.models.shared.TimerScript[] timerScripts) {
        this.timerScripts = timerScripts;
        return this;
    }
}