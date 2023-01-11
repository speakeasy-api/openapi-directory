package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateLensesRequestBody {
    @JsonProperty("LensAliases")
    public String[] lensAliases;
    public AssociateLensesRequestBody withLensAliases(String[] lensAliases) {
        this.lensAliases = lensAliases;
        return this;
    }
}