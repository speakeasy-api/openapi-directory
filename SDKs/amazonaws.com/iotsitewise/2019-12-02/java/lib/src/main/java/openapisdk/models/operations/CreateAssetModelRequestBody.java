package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAssetModelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetModelCompositeModels")
    public openapisdk.models.shared.AssetModelCompositeModelDefinition[] assetModelCompositeModels;
    public CreateAssetModelRequestBody withAssetModelCompositeModels(openapisdk.models.shared.AssetModelCompositeModelDefinition[] assetModelCompositeModels) {
        this.assetModelCompositeModels = assetModelCompositeModels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetModelDescription")
    public String assetModelDescription;
    public CreateAssetModelRequestBody withAssetModelDescription(String assetModelDescription) {
        this.assetModelDescription = assetModelDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetModelHierarchies")
    public openapisdk.models.shared.AssetModelHierarchyDefinition[] assetModelHierarchies;
    public CreateAssetModelRequestBody withAssetModelHierarchies(openapisdk.models.shared.AssetModelHierarchyDefinition[] assetModelHierarchies) {
        this.assetModelHierarchies = assetModelHierarchies;
        return this;
    }
    @JsonProperty("assetModelName")
    public String assetModelName;
    public CreateAssetModelRequestBody withAssetModelName(String assetModelName) {
        this.assetModelName = assetModelName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetModelProperties")
    public openapisdk.models.shared.AssetModelPropertyDefinition[] assetModelProperties;
    public CreateAssetModelRequestBody withAssetModelProperties(openapisdk.models.shared.AssetModelPropertyDefinition[] assetModelProperties) {
        this.assetModelProperties = assetModelProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateAssetModelRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateAssetModelRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}