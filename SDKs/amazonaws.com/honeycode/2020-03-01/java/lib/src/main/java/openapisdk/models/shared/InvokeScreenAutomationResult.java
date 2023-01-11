package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InvokeScreenAutomationResult {
    @JsonProperty("workbookCursor")
    public Long workbookCursor;
    public InvokeScreenAutomationResult withWorkbookCursor(Long workbookCursor) {
        this.workbookCursor = workbookCursor;
        return this;
    }
}