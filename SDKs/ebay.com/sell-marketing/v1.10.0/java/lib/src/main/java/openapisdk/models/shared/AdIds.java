package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdIds
 * This type is a container for a list of ad IDs.
**/
public class AdIds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adIds")
    public String[] adIds;
    public AdIds withAdIds(String[] adIds) {
        this.adIds = adIds;
        return this;
    }
}