/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest {
    /**
     * The project in question. This can either be the actual `key` assigned
     * to the project or the `UUID` (surrounded by curly-braces (`{}`)).
     * 
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_key")
    public String projectKey;

    public PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest withProjectKey(String projectKey) {
        this.projectKey = projectKey;
        return this;
    }
    
    /**
     * This can either be the username or the UUID of the default reviewer,
     * surrounded by curly-braces, for example: `{account UUID}`.
     * 
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=selected_user")
    public String selectedUser;

    public PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest withSelectedUser(String selectedUser) {
        this.selectedUser = selectedUser;
        return this;
    }
    
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     * 
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=workspace")
    public String workspace;

    public PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
    
    public PutWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest(@JsonProperty("project_key") String projectKey, @JsonProperty("selected_user") String selectedUser, @JsonProperty("workspace") String workspace) {
        this.projectKey = projectKey;
        this.selectedUser = selectedUser;
        this.workspace = workspace;
  }
}
