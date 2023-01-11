package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplacementEmailContent
 * The <code>ReplaceEmailContent</code> object to be used for a specific <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified within this object.
**/
public class ReplacementEmailContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplacementTemplate")
    public ReplacementTemplate replacementTemplate;
    public ReplacementEmailContent withReplacementTemplate(ReplacementTemplate replacementTemplate) {
        this.replacementTemplate = replacementTemplate;
        return this;
    }
}