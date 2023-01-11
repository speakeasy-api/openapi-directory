package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBuildBatchesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids")
    public String[] ids;
    public ListBuildBatchesOutput withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListBuildBatchesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}