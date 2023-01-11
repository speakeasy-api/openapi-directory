package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RelatedFinding
 * Details about a related finding.
**/
public class RelatedFinding {
    @JsonProperty("Id")
    public String id;
    public RelatedFinding withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("ProductArn")
    public String productArn;
    public RelatedFinding withProductArn(String productArn) {
        this.productArn = productArn;
        return this;
    }
}