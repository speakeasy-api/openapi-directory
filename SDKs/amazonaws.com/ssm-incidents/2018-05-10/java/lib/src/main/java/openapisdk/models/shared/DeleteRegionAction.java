package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteRegionAction
 * Defines the information about the Region you're deleting from your replication set.
**/
public class DeleteRegionAction {
    @JsonProperty("regionName")
    public String regionName;
    public DeleteRegionAction withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
}