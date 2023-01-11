package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchRequestActionOptions
 * Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action. “Pretty” JSON output is not an available option on individual actions; if you want pretty output, specify that option on the parent request.
**/
public class BatchRequestActionOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String[] fields;
    public BatchRequestActionOptions withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Long limit;
    public BatchRequestActionOptions withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public Long offset;
    public BatchRequestActionOptions withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
}