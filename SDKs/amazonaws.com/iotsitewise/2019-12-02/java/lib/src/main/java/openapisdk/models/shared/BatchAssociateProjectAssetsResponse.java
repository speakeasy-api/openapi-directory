package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchAssociateProjectAssetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public AssetErrorDetails[] errors;
    public BatchAssociateProjectAssetsResponse withErrors(AssetErrorDetails[] errors) {
        this.errors = errors;
        return this;
    }
}