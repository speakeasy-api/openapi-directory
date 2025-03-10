/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class TestDeleteDeviceSetOfUserRequest {
    /**
     * The name of the application
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_name")
    public String appName;

    public TestDeleteDeviceSetOfUserRequest withAppName(String appName) {
        this.appName = appName;
        return this;
    }
    
    /**
     * The UUID of the device set
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;

    public TestDeleteDeviceSetOfUserRequest withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The name of the owner
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner_name")
    public String ownerName;

    public TestDeleteDeviceSetOfUserRequest withOwnerName(String ownerName) {
        this.ownerName = ownerName;
        return this;
    }
    
    public TestDeleteDeviceSetOfUserRequest(@JsonProperty("app_name") String appName, @JsonProperty("id") String id, @JsonProperty("owner_name") String ownerName) {
        this.appName = appName;
        this.id = id;
        this.ownerName = ownerName;
  }
}
