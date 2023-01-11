package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeAssetModelResponse {
    @JsonProperty("assetModelArn")
    public String assetModelArn;
    public DescribeAssetModelResponse withAssetModelArn(String assetModelArn) {
        this.assetModelArn = assetModelArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetModelCompositeModels")
    public AssetModelCompositeModel[] assetModelCompositeModels;
    public DescribeAssetModelResponse withAssetModelCompositeModels(AssetModelCompositeModel[] assetModelCompositeModels) {
        this.assetModelCompositeModels = assetModelCompositeModels;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("assetModelCreationDate")
    public OffsetDateTime assetModelCreationDate;
    public DescribeAssetModelResponse withAssetModelCreationDate(OffsetDateTime assetModelCreationDate) {
        this.assetModelCreationDate = assetModelCreationDate;
        return this;
    }
    @JsonProperty("assetModelDescription")
    public String assetModelDescription;
    public DescribeAssetModelResponse withAssetModelDescription(String assetModelDescription) {
        this.assetModelDescription = assetModelDescription;
        return this;
    }
    @JsonProperty("assetModelHierarchies")
    public AssetModelHierarchy[] assetModelHierarchies;
    public DescribeAssetModelResponse withAssetModelHierarchies(AssetModelHierarchy[] assetModelHierarchies) {
        this.assetModelHierarchies = assetModelHierarchies;
        return this;
    }
    @JsonProperty("assetModelId")
    public String assetModelId;
    public DescribeAssetModelResponse withAssetModelId(String assetModelId) {
        this.assetModelId = assetModelId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("assetModelLastUpdateDate")
    public OffsetDateTime assetModelLastUpdateDate;
    public DescribeAssetModelResponse withAssetModelLastUpdateDate(OffsetDateTime assetModelLastUpdateDate) {
        this.assetModelLastUpdateDate = assetModelLastUpdateDate;
        return this;
    }
    @JsonProperty("assetModelName")
    public String assetModelName;
    public DescribeAssetModelResponse withAssetModelName(String assetModelName) {
        this.assetModelName = assetModelName;
        return this;
    }
    @JsonProperty("assetModelProperties")
    public AssetModelProperty[] assetModelProperties;
    public DescribeAssetModelResponse withAssetModelProperties(AssetModelProperty[] assetModelProperties) {
        this.assetModelProperties = assetModelProperties;
        return this;
    }
    @JsonProperty("assetModelStatus")
    public AssetModelStatus assetModelStatus;
    public DescribeAssetModelResponse withAssetModelStatus(AssetModelStatus assetModelStatus) {
        this.assetModelStatus = assetModelStatus;
        return this;
    }
}