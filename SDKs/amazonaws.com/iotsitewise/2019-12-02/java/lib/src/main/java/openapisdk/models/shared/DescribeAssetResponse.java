package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeAssetResponse {
    @JsonProperty("assetArn")
    public String assetArn;
    public DescribeAssetResponse withAssetArn(String assetArn) {
        this.assetArn = assetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetCompositeModels")
    public AssetCompositeModel[] assetCompositeModels;
    public DescribeAssetResponse withAssetCompositeModels(AssetCompositeModel[] assetCompositeModels) {
        this.assetCompositeModels = assetCompositeModels;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("assetCreationDate")
    public OffsetDateTime assetCreationDate;
    public DescribeAssetResponse withAssetCreationDate(OffsetDateTime assetCreationDate) {
        this.assetCreationDate = assetCreationDate;
        return this;
    }
    @JsonProperty("assetHierarchies")
    public AssetHierarchy[] assetHierarchies;
    public DescribeAssetResponse withAssetHierarchies(AssetHierarchy[] assetHierarchies) {
        this.assetHierarchies = assetHierarchies;
        return this;
    }
    @JsonProperty("assetId")
    public String assetId;
    public DescribeAssetResponse withAssetId(String assetId) {
        this.assetId = assetId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("assetLastUpdateDate")
    public OffsetDateTime assetLastUpdateDate;
    public DescribeAssetResponse withAssetLastUpdateDate(OffsetDateTime assetLastUpdateDate) {
        this.assetLastUpdateDate = assetLastUpdateDate;
        return this;
    }
    @JsonProperty("assetModelId")
    public String assetModelId;
    public DescribeAssetResponse withAssetModelId(String assetModelId) {
        this.assetModelId = assetModelId;
        return this;
    }
    @JsonProperty("assetName")
    public String assetName;
    public DescribeAssetResponse withAssetName(String assetName) {
        this.assetName = assetName;
        return this;
    }
    @JsonProperty("assetProperties")
    public AssetProperty[] assetProperties;
    public DescribeAssetResponse withAssetProperties(AssetProperty[] assetProperties) {
        this.assetProperties = assetProperties;
        return this;
    }
    @JsonProperty("assetStatus")
    public AssetStatus assetStatus;
    public DescribeAssetResponse withAssetStatus(AssetStatus assetStatus) {
        this.assetStatus = assetStatus;
        return this;
    }
}