package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CodeScanningAlertInstanceMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public CodeScanningAlertInstanceMessage withText(String text) {
        this.text = text;
        return this;
    }
}