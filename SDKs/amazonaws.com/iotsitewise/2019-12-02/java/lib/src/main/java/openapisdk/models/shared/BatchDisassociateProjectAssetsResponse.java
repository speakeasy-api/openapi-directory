package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDisassociateProjectAssetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public AssetErrorDetails[] errors;
    public BatchDisassociateProjectAssetsResponse withErrors(AssetErrorDetails[] errors) {
        this.errors = errors;
        return this;
    }
}