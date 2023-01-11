package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateSizeConstraintSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateSizeConstraintSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("SizeConstraintSetId")
    public String sizeConstraintSetId;
    public UpdateSizeConstraintSetRequest withSizeConstraintSetId(String sizeConstraintSetId) {
        this.sizeConstraintSetId = sizeConstraintSetId;
        return this;
    }
    @JsonProperty("Updates")
    public SizeConstraintSetUpdate[] updates;
    public UpdateSizeConstraintSetRequest withUpdates(SizeConstraintSetUpdate[] updates) {
        this.updates = updates;
        return this;
    }
}