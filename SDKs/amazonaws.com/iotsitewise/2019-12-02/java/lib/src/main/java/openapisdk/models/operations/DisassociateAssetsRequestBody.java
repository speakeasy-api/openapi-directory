package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateAssetsRequestBody {
    @JsonProperty("childAssetId")
    public String childAssetId;
    public DisassociateAssetsRequestBody withChildAssetId(String childAssetId) {
        this.childAssetId = childAssetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public DisassociateAssetsRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("hierarchyId")
    public String hierarchyId;
    public DisassociateAssetsRequestBody withHierarchyId(String hierarchyId) {
        this.hierarchyId = hierarchyId;
        return this;
    }
}