/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSnapshotScheduleMessage {
    
    public String scheduleIdentifier;

    public DeleteSnapshotScheduleMessage withScheduleIdentifier(String scheduleIdentifier) {
        this.scheduleIdentifier = scheduleIdentifier;
        return this;
    }
    
    public DeleteSnapshotScheduleMessage(@JsonProperty("ScheduleIdentifier") String scheduleIdentifier) {
        this.scheduleIdentifier = scheduleIdentifier;
  }
}
