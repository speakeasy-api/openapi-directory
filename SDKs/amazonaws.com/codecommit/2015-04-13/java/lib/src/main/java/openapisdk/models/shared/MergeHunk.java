package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MergeHunk
 * Information about merge hunks in a merge or pull request operation.
**/
public class MergeHunk {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base")
    public MergeHunkDetail base;
    public MergeHunk withBase(MergeHunkDetail base) {
        this.base = base;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public MergeHunkDetail destination;
    public MergeHunk withDestination(MergeHunkDetail destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isConflict")
    public Boolean isConflict;
    public MergeHunk withIsConflict(Boolean isConflict) {
        this.isConflict = isConflict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public MergeHunkDetail source;
    public MergeHunk withSource(MergeHunkDetail source) {
        this.source = source;
        return this;
    }
}