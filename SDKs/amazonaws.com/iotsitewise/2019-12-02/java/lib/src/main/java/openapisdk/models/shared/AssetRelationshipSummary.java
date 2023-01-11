package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetRelationshipSummary
 * Contains information about assets that are related to one another.
**/
public class AssetRelationshipSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hierarchyInfo")
    public AssetHierarchyInfo hierarchyInfo;
    public AssetRelationshipSummary withHierarchyInfo(AssetHierarchyInfo hierarchyInfo) {
        this.hierarchyInfo = hierarchyInfo;
        return this;
    }
    @JsonProperty("relationshipType")
    public AssetRelationshipTypeEnum relationshipType;
    public AssetRelationshipSummary withRelationshipType(AssetRelationshipTypeEnum relationshipType) {
        this.relationshipType = relationshipType;
        return this;
    }
}