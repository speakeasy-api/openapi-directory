package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReplacementTemplate
 * An object which contains <code>ReplacementTemplateData</code> to be used for a specific <code>BulkEmailEntry</code>.
**/
public class ReplacementTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplacementTemplateData")
    public String replacementTemplateData;
    public ReplacementTemplate withReplacementTemplateData(String replacementTemplateData) {
        this.replacementTemplateData = replacementTemplateData;
        return this;
    }
}