package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetHierarchyInfo
 * Contains information about a parent asset and a child asset that are related through an asset hierarchy.
**/
public class AssetHierarchyInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childAssetId")
    public String childAssetId;
    public AssetHierarchyInfo withChildAssetId(String childAssetId) {
        this.childAssetId = childAssetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentAssetId")
    public String parentAssetId;
    public AssetHierarchyInfo withParentAssetId(String parentAssetId) {
        this.parentAssetId = parentAssetId;
        return this;
    }
}