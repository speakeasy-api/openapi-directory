/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GroupV2EditGroupRequest {
    /**
     * Group ID of the group to edit.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=groupId")
    public Long groupId;

    public GroupV2EditGroupRequest withGroupId(Long groupId) {
        this.groupId = groupId;
        return this;
    }
    
    public GroupV2EditGroupRequest(@JsonProperty("groupId") Long groupId) {
        this.groupId = groupId;
  }
}
