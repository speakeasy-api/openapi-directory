package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDropletSnapshots200ApplicationJsonLinksPages2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public String first;
    public ListDropletSnapshots200ApplicationJsonLinksPages2 withFirst(String first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public String prev;
    public ListDropletSnapshots200ApplicationJsonLinksPages2 withPrev(String prev) {
        this.prev = prev;
        return this;
    }
}