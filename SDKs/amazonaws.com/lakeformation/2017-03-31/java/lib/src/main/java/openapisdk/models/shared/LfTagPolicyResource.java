package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LfTagPolicyResource
 * A structure containing a list of tag conditions that apply to a resource's tag policy.
**/
public class LfTagPolicyResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogId")
    public String catalogId;
    public LfTagPolicyResource withCatalogId(String catalogId) {
        this.catalogId = catalogId;
        return this;
    }
    @JsonProperty("Expression")
    public LfTag[] expression;
    public LfTagPolicyResource withExpression(LfTag[] expression) {
        this.expression = expression;
        return this;
    }
    @JsonProperty("ResourceType")
    public ResourceTypeEnum resourceType;
    public LfTagPolicyResource withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}