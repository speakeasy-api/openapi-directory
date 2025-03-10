/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class TeamsRemoveProjectLegacyRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project_id")
    public Long projectId;

    public TeamsRemoveProjectLegacyRequest withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=team_id")
    public Long teamId;

    public TeamsRemoveProjectLegacyRequest withTeamId(Long teamId) {
        this.teamId = teamId;
        return this;
    }
    
    public TeamsRemoveProjectLegacyRequest(@JsonProperty("project_id") Long projectId, @JsonProperty("team_id") Long teamId) {
        this.projectId = projectId;
        this.teamId = teamId;
  }
}
