/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AnalyticsIndexLinks {
    @JsonProperty("self")
    public LinksAnalyticsIndexLink self;

    public AnalyticsIndexLinks withSelf(LinksAnalyticsIndexLink self) {
        this.self = self;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingStatus")
    public LinksGetTrackingStatusLink trackingStatus;

    public AnalyticsIndexLinks withTrackingStatus(LinksGetTrackingStatusLink trackingStatus) {
        this.trackingStatus = trackingStatus;
        return this;
    }
    
    public AnalyticsIndexLinks(@JsonProperty("self") LinksAnalyticsIndexLink self) {
        this.self = self;
  }
}
