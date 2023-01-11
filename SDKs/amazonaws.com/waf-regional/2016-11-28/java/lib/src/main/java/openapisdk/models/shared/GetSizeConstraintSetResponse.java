package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSizeConstraintSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeConstraintSet")
    public SizeConstraintSet sizeConstraintSet;
    public GetSizeConstraintSetResponse withSizeConstraintSet(SizeConstraintSet sizeConstraintSet) {
        this.sizeConstraintSet = sizeConstraintSet;
        return this;
    }
}