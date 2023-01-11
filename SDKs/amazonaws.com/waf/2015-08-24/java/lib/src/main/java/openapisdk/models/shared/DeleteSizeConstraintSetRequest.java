package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSizeConstraintSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteSizeConstraintSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("SizeConstraintSetId")
    public String sizeConstraintSetId;
    public DeleteSizeConstraintSetRequest withSizeConstraintSetId(String sizeConstraintSetId) {
        this.sizeConstraintSetId = sizeConstraintSetId;
        return this;
    }
}