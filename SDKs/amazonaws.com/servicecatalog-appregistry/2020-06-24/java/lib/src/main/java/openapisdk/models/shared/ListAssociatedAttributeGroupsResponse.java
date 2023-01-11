package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssociatedAttributeGroupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributeGroups")
    public String[] attributeGroups;
    public ListAssociatedAttributeGroupsResponse withAttributeGroups(String[] attributeGroups) {
        this.attributeGroups = attributeGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssociatedAttributeGroupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}