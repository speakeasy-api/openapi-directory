package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TranslateGif200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.Gif data;
    public TranslateGif200ApplicationJson withData(openapisdk.models.shared.Gif data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public openapisdk.models.shared.Meta meta;
    public TranslateGif200ApplicationJson withMeta(openapisdk.models.shared.Meta meta) {
        this.meta = meta;
        return this;
    }
}