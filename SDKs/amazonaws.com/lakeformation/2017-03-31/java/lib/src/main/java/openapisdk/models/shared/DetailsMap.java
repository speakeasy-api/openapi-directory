package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetailsMap
 * <p>A structure containing the additional details to be returned in the <code>AdditionalDetails</code> attribute of <code>PrincipalResourcePermissions</code>.</p> <p>If a catalog resource is shared through AWS Resource Access Manager (AWS RAM), then there will exist a corresponding RAM resource share ARN.</p>
**/
public class DetailsMap {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceShare")
    public String[] resourceShare;
    public DetailsMap withResourceShare(String[] resourceShare) {
        this.resourceShare = resourceShare;
        return this;
    }
}