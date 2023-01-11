package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAssetModelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetModelCompositeModels")
    public openapisdk.models.shared.AssetModelCompositeModel[] assetModelCompositeModels;
    public UpdateAssetModelRequestBody withAssetModelCompositeModels(openapisdk.models.shared.AssetModelCompositeModel[] assetModelCompositeModels) {
        this.assetModelCompositeModels = assetModelCompositeModels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetModelDescription")
    public String assetModelDescription;
    public UpdateAssetModelRequestBody withAssetModelDescription(String assetModelDescription) {
        this.assetModelDescription = assetModelDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetModelHierarchies")
    public openapisdk.models.shared.AssetModelHierarchy[] assetModelHierarchies;
    public UpdateAssetModelRequestBody withAssetModelHierarchies(openapisdk.models.shared.AssetModelHierarchy[] assetModelHierarchies) {
        this.assetModelHierarchies = assetModelHierarchies;
        return this;
    }
    @JsonProperty("assetModelName")
    public String assetModelName;
    public UpdateAssetModelRequestBody withAssetModelName(String assetModelName) {
        this.assetModelName = assetModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetModelProperties")
    public openapisdk.models.shared.AssetModelProperty[] assetModelProperties;
    public UpdateAssetModelRequestBody withAssetModelProperties(openapisdk.models.shared.AssetModelProperty[] assetModelProperties) {
        this.assetModelProperties = assetModelProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateAssetModelRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}