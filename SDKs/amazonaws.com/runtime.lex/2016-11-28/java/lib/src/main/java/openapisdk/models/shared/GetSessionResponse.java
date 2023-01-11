package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSessionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeContexts")
    public ActiveContext[] activeContexts;
    public GetSessionResponse withActiveContexts(ActiveContext[] activeContexts) {
        this.activeContexts = activeContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogAction")
    public DialogAction dialogAction;
    public GetSessionResponse withDialogAction(DialogAction dialogAction) {
        this.dialogAction = dialogAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recentIntentSummaryView")
    public IntentSummary[] recentIntentSummaryView;
    public GetSessionResponse withRecentIntentSummaryView(IntentSummary[] recentIntentSummaryView) {
        this.recentIntentSummaryView = recentIntentSummaryView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionAttributes")
    public java.util.Map<String, String> sessionAttributes;
    public GetSessionResponse withSessionAttributes(java.util.Map<String, String> sessionAttributes) {
        this.sessionAttributes = sessionAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public GetSessionResponse withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
}