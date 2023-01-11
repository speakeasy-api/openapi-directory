package openapisdk.models.operations;



public class ListTimerScriptsResponse {
    public String contentType;
    public ListTimerScriptsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListTimerScriptsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TimerScript[] timerScripts;
    public ListTimerScriptsResponse withTimerScripts(openapisdk.models.shared.TimerScript[] timerScripts) {
        this.timerScripts = timerScripts;
        return this;
    }
}