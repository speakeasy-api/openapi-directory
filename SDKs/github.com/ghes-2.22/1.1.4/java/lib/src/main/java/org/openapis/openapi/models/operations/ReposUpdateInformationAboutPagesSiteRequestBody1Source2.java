/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReposUpdateInformationAboutPagesSiteRequestBody1Source2 - Update the source for the repository. Must include the branch name and path.
 */
public class ReposUpdateInformationAboutPagesSiteRequestBody1Source2 {
    /**
     * The repository branch used to publish your site's source files.
     */
    @JsonProperty("branch")
    public String branch;

    public ReposUpdateInformationAboutPagesSiteRequestBody1Source2 withBranch(String branch) {
        this.branch = branch;
        return this;
    }
    
    /**
     * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
     */
    @JsonProperty("path")
    public ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum path;

    public ReposUpdateInformationAboutPagesSiteRequestBody1Source2 withPath(ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum path) {
        this.path = path;
        return this;
    }
    
    public ReposUpdateInformationAboutPagesSiteRequestBody1Source2(@JsonProperty("branch") String branch, @JsonProperty("path") ReposUpdateInformationAboutPagesSiteRequestBody1Source2PathEnum path) {
        this.branch = branch;
        this.path = path;
  }
}
