package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchStickers200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.Gif[] data;
    public SearchStickers200ApplicationJson withData(openapisdk.models.shared.Gif[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public openapisdk.models.shared.Meta meta;
    public SearchStickers200ApplicationJson withMeta(openapisdk.models.shared.Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public openapisdk.models.shared.Pagination pagination;
    public SearchStickers200ApplicationJson withPagination(openapisdk.models.shared.Pagination pagination) {
        this.pagination = pagination;
        return this;
    }
}