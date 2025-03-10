/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnterpriseMilestoneOverview - Response
 */
public class EnterpriseMilestoneOverview {
    @JsonProperty("closed_milestones")
    public Long closedMilestones;

    public EnterpriseMilestoneOverview withClosedMilestones(Long closedMilestones) {
        this.closedMilestones = closedMilestones;
        return this;
    }
    
    @JsonProperty("open_milestones")
    public Long openMilestones;

    public EnterpriseMilestoneOverview withOpenMilestones(Long openMilestones) {
        this.openMilestones = openMilestones;
        return this;
    }
    
    @JsonProperty("total_milestones")
    public Long totalMilestones;

    public EnterpriseMilestoneOverview withTotalMilestones(Long totalMilestones) {
        this.totalMilestones = totalMilestones;
        return this;
    }
    
    public EnterpriseMilestoneOverview(@JsonProperty("closed_milestones") Long closedMilestones, @JsonProperty("open_milestones") Long openMilestones, @JsonProperty("total_milestones") Long totalMilestones) {
        this.closedMilestones = closedMilestones;
        this.openMilestones = openMilestones;
        this.totalMilestones = totalMilestones;
  }
}
