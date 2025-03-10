/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateCampaignResponse - Success
 */
public class CreateCampaignResponse {
    /**
     * Provides information about the status, configuration, and other settings for a campaign.
     */
    @JsonProperty("CampaignResponse")
    public CampaignResponse campaignResponse;

    public CreateCampaignResponse withCampaignResponse(CampaignResponse campaignResponse) {
        this.campaignResponse = campaignResponse;
        return this;
    }
    
    public CreateCampaignResponse(@JsonProperty("CampaignResponse") CampaignResponse campaignResponse) {
        this.campaignResponse = campaignResponse;
  }
}
