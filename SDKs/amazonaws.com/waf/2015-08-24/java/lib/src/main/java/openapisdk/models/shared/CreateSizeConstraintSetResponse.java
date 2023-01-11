package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSizeConstraintSetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeToken")
    public String changeToken;
    public CreateSizeConstraintSetResponse withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeConstraintSet")
    public SizeConstraintSet sizeConstraintSet;
    public CreateSizeConstraintSetResponse withSizeConstraintSet(SizeConstraintSet sizeConstraintSet) {
        this.sizeConstraintSet = sizeConstraintSet;
        return this;
    }
}