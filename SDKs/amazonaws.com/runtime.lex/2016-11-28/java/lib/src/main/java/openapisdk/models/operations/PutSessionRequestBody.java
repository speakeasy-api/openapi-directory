package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSessionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeContexts")
    public openapisdk.models.shared.ActiveContext[] activeContexts;
    public PutSessionRequestBody withActiveContexts(openapisdk.models.shared.ActiveContext[] activeContexts) {
        this.activeContexts = activeContexts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogAction")
    public PutSessionRequestBodyDialogAction dialogAction;
    public PutSessionRequestBody withDialogAction(PutSessionRequestBodyDialogAction dialogAction) {
        this.dialogAction = dialogAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recentIntentSummaryView")
    public openapisdk.models.shared.IntentSummary[] recentIntentSummaryView;
    public PutSessionRequestBody withRecentIntentSummaryView(openapisdk.models.shared.IntentSummary[] recentIntentSummaryView) {
        this.recentIntentSummaryView = recentIntentSummaryView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionAttributes")
    public java.util.Map<String, String> sessionAttributes;
    public PutSessionRequestBody withSessionAttributes(java.util.Map<String, String> sessionAttributes) {
        this.sessionAttributes = sessionAttributes;
        return this;
    }
}