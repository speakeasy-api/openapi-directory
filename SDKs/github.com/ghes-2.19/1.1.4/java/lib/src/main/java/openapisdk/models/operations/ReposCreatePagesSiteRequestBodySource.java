package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReposCreatePagesSiteRequestBodySource
 * The source branch and directory used to publish your Pages site.
**/
public class ReposCreatePagesSiteRequestBodySource {
    @JsonProperty("branch")
    public ReposCreatePagesSiteRequestBodySourceBranchEnum branch;
    public ReposCreatePagesSiteRequestBodySource withBranch(ReposCreatePagesSiteRequestBodySourceBranchEnum branch) {
        this.branch = branch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public ReposCreatePagesSiteRequestBodySourcePathEnum path;
    public ReposCreatePagesSiteRequestBodySource withPath(ReposCreatePagesSiteRequestBodySourcePathEnum path) {
        this.path = path;
        return this;
    }
}