package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddAttributesToFindingsRequest {
    @JsonProperty("attributes")
    public Attribute[] attributes;
    public AddAttributesToFindingsRequest withAttributes(Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("findingArns")
    public String[] findingArns;
    public AddAttributesToFindingsRequest withFindingArns(String[] findingArns) {
        this.findingArns = findingArns;
        return this;
    }
}