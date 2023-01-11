package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaginatedPipelineCaches
 * A paged list of pipeline caches
**/
public class PaginatedPipelineCaches {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PaginatedPipelineCaches withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public PaginatedPipelineCaches withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagelen")
    public Long pagelen;
    public PaginatedPipelineCaches withPagelen(Long pagelen) {
        this.pagelen = pagelen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public PaginatedPipelineCaches withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public PaginatedPipelineCaches withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public java.util.Map<String, Object>[] values;
    public PaginatedPipelineCaches withValues(java.util.Map<String, Object>[] values) {
        this.values = values;
        return this;
    }
}