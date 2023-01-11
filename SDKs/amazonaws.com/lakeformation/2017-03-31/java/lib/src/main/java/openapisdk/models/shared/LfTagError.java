package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LfTagError
 * A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation.
**/
public class LfTagError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public ErrorDetail error;
    public LfTagError withError(ErrorDetail error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTag")
    public LfTagPair lfTag;
    public LfTagError withLfTag(LfTagPair lfTag) {
        this.lfTag = lfTag;
        return this;
    }
}