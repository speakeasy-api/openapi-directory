/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class AnalyticsEventDeviceCountRequest {
    /**
     * The name of the application
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=app_name")
    public String appName;

    public AnalyticsEventDeviceCountRequest withAppName(String appName) {
        this.appName = appName;
        return this;
    }
    
    /**
     * Last date time in data in ISO 8601 date time format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public OffsetDateTime end;

    public AnalyticsEventDeviceCountRequest withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    
    /**
     * The id of the event.
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=event_name")
    public String eventName;

    public AnalyticsEventDeviceCountRequest withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    
    /**
     * The name of the owner
     */
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner_name")
    public String ownerName;

    public AnalyticsEventDeviceCountRequest withOwnerName(String ownerName) {
        this.ownerName = ownerName;
        return this;
    }
    
    /**
     * Start date time in data in ISO 8601 date time format.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public OffsetDateTime start;

    public AnalyticsEventDeviceCountRequest withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
    
    /**
     * To select specific application versions
     */
    @SpeakeasyMetadata("queryParam:style=pipeDelimited,explode=true,name=versions")
    public String[] versions;

    public AnalyticsEventDeviceCountRequest withVersions(String[] versions) {
        this.versions = versions;
        return this;
    }
    
    public AnalyticsEventDeviceCountRequest(@JsonProperty("app_name") String appName, @JsonProperty("event_name") String eventName, @JsonProperty("owner_name") String ownerName, @JsonProperty("start") OffsetDateTime start) {
        this.appName = appName;
        this.eventName = eventName;
        this.ownerName = ownerName;
        this.start = start;
  }
}
