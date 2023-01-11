package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MergeHunkDetail
 * Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.
**/
public class MergeHunkDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endLine")
    public Long endLine;
    public MergeHunkDetail withEndLine(Long endLine) {
        this.endLine = endLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hunkContent")
    public String hunkContent;
    public MergeHunkDetail withHunkContent(String hunkContent) {
        this.hunkContent = hunkContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startLine")
    public Long startLine;
    public MergeHunkDetail withStartLine(Long startLine) {
        this.startLine = startLine;
        return this;
    }
}