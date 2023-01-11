package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAssetPropertyResponse {
    @JsonProperty("assetId")
    public String assetId;
    public DescribeAssetPropertyResponse withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @JsonProperty("assetModelId")
    public String assetModelId;
    public DescribeAssetPropertyResponse withAssetModelId(String assetModelId) {
        this.assetModelId = assetModelId;
        return this;
    }
    @JsonProperty("assetName")
    public String assetName;
    public DescribeAssetPropertyResponse withAssetName(String assetName) {
        this.assetName = assetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetProperty")
    public Property assetProperty;
    public DescribeAssetPropertyResponse withAssetProperty(Property assetProperty) {
        this.assetProperty = assetProperty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compositeModel")
    public CompositeModelProperty compositeModel;
    public DescribeAssetPropertyResponse withCompositeModel(CompositeModelProperty compositeModel) {
        this.compositeModel = compositeModel;
        return this;
    }
}