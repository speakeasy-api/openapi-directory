package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReposUpdateInformationAboutPagesSiteRequestBodySource2
 * Update the source for the repository. Must include the branch name and path.
**/
public class ReposUpdateInformationAboutPagesSiteRequestBodySource2 {
    @JsonProperty("branch")
    public String branch;
    public ReposUpdateInformationAboutPagesSiteRequestBodySource2 withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    @JsonProperty("path")
    public ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum path;
    public ReposUpdateInformationAboutPagesSiteRequestBodySource2 withPath(ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum path) {
        this.path = path;
        return this;
    }
}