package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateAssetsRequestBody {
    @JsonProperty("childAssetId")
    public String childAssetId;
    public AssociateAssetsRequestBody withChildAssetId(String childAssetId) {
        this.childAssetId = childAssetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public AssociateAssetsRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("hierarchyId")
    public String hierarchyId;
    public AssociateAssetsRequestBody withHierarchyId(String hierarchyId) {
        this.hierarchyId = hierarchyId;
        return this;
    }
}