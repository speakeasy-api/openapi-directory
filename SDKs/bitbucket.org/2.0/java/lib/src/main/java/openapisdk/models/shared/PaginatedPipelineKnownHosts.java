package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaginatedPipelineKnownHosts
 * A paged list of known hosts.
**/
public class PaginatedPipelineKnownHosts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public PaginatedPipelineKnownHosts withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public PaginatedPipelineKnownHosts withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagelen")
    public Long pagelen;
    public PaginatedPipelineKnownHosts withPagelen(Long pagelen) {
        this.pagelen = pagelen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public PaginatedPipelineKnownHosts withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Long size;
    public PaginatedPipelineKnownHosts withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public java.util.Map<String, Object>[] values;
    public PaginatedPipelineKnownHosts withValues(java.util.Map<String, Object>[] values) {
        this.values = values;
        return this;
    }
}