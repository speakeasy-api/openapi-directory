package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BeezUpCommonPaginationResultLinks
 * The navigation links 'first', 'last', 'next', 'previous'
**/
public class BeezUpCommonPaginationResultLinks {
    @JsonProperty("first")
    public BeezUpCommonLink3 first;
    public BeezUpCommonPaginationResultLinks withFirst(BeezUpCommonLink3 first) {
        this.first = first;
        return this;
    }
    @JsonProperty("last")
    public BeezUpCommonLink3 last;
    public BeezUpCommonPaginationResultLinks withLast(BeezUpCommonLink3 last) {
        this.last = last;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public BeezUpCommonLink3 next;
    public BeezUpCommonPaginationResultLinks withNext(BeezUpCommonLink3 next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public BeezUpCommonLink3 previous;
    public BeezUpCommonPaginationResultLinks withPrevious(BeezUpCommonLink3 previous) {
        this.previous = previous;
        return this;
    }
}