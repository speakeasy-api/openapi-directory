package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateLensesRequestBody {
    @JsonProperty("LensAliases")
    public String[] lensAliases;
    public DisassociateLensesRequestBody withLensAliases(String[] lensAliases) {
        this.lensAliases = lensAliases;
        return this;
    }
}