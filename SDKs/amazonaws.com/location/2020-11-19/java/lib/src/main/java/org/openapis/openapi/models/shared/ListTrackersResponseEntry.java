/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * ListTrackersResponseEntry - Contains the tracker resource details.
 */
public class ListTrackersResponseEntry {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;

    public ListTrackersResponseEntry withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    
    @JsonProperty("Description")
    public String description;

    public ListTrackersResponseEntry withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PricingPlan")
    public ListTrackersResponseEntryPricingPlanEnum pricingPlan;

    public ListTrackersResponseEntry withPricingPlan(ListTrackersResponseEntryPricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PricingPlanDataSource")
    public String pricingPlanDataSource;

    public ListTrackersResponseEntry withPricingPlanDataSource(String pricingPlanDataSource) {
        this.pricingPlanDataSource = pricingPlanDataSource;
        return this;
    }
    
    @JsonProperty("TrackerName")
    public String trackerName;

    public ListTrackersResponseEntry withTrackerName(String trackerName) {
        this.trackerName = trackerName;
        return this;
    }
    
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("UpdateTime")
    public OffsetDateTime updateTime;

    public ListTrackersResponseEntry withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    
    public ListTrackersResponseEntry(@JsonProperty("CreateTime") OffsetDateTime createTime, @JsonProperty("Description") String description, @JsonProperty("TrackerName") String trackerName, @JsonProperty("UpdateTime") OffsetDateTime updateTime) {
        this.createTime = createTime;
        this.description = description;
        this.trackerName = trackerName;
        this.updateTime = updateTime;
  }
}
