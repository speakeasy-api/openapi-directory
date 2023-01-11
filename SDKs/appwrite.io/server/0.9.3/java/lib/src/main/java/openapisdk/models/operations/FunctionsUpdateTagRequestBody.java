package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FunctionsUpdateTagRequestBody {
    @JsonProperty("tag")
    public String tag;
    public FunctionsUpdateTagRequestBody withTag(String tag) {
        this.tag = tag;
        return this;
    }
}