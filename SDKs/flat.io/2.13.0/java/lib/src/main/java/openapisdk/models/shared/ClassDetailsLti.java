package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassDetailsLti
 * Meta information provided by the LTI consumer
**/
public class ClassDetailsLti {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contextId")
    public String contextId;
    public ClassDetailsLti withContextId(String contextId) {
        this.contextId = contextId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contextLabel")
    public String contextLabel;
    public ClassDetailsLti withContextLabel(String contextLabel) {
        this.contextLabel = contextLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contextTitle")
    public String contextTitle;
    public ClassDetailsLti withContextTitle(String contextTitle) {
        this.contextTitle = contextTitle;
        return this;
    }
}