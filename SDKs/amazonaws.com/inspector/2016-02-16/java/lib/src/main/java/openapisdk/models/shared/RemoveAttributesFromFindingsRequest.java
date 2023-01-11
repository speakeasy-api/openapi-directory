package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveAttributesFromFindingsRequest {
    @JsonProperty("attributeKeys")
    public String[] attributeKeys;
    public RemoveAttributesFromFindingsRequest withAttributeKeys(String[] attributeKeys) {
        this.attributeKeys = attributeKeys;
        return this;
    }
    @JsonProperty("findingArns")
    public String[] findingArns;
    public RemoveAttributesFromFindingsRequest withFindingArns(String[] findingArns) {
        this.findingArns = findingArns;
        return this;
    }
}