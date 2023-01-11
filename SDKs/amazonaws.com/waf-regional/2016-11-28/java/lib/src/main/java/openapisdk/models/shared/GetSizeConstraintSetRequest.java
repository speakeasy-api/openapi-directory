package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetSizeConstraintSetRequest {
    @JsonProperty("SizeConstraintSetId")
    public String sizeConstraintSetId;
    public GetSizeConstraintSetRequest withSizeConstraintSetId(String sizeConstraintSetId) {
        this.sizeConstraintSetId = sizeConstraintSetId;
        return this;
    }
}