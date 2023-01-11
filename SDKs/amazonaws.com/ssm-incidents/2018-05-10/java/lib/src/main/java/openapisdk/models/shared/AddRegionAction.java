package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddRegionAction
 * Defines the Region and KMS key to add to the replication set. 
**/
public class AddRegionAction {
    @JsonProperty("regionName")
    public String regionName;
    public AddRegionAction withRegionName(String regionName) {
        this.regionName = regionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sseKmsKeyId")
    public String sseKmsKeyId;
    public AddRegionAction withSseKmsKeyId(String sseKmsKeyId) {
        this.sseKmsKeyId = sseKmsKeyId;
        return this;
    }
}