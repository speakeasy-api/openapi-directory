package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceTagMapping
 * A list of resource ARNs and the tags (keys and values) that are associated with each.
**/
public class ResourceTagMapping {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceDetails")
    public ComplianceDetails complianceDetails;
    public ResourceTagMapping withComplianceDetails(ComplianceDetails complianceDetails) {
        this.complianceDetails = complianceDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public ResourceTagMapping withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public ResourceTagMapping withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}