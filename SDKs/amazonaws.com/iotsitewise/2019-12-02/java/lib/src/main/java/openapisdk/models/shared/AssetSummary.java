package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AssetSummary
 * Contains a summary of an asset.
**/
public class AssetSummary {
    @JsonProperty("arn")
    public String arn;
    public AssetSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("assetModelId")
    public String assetModelId;
    public AssetSummary withAssetModelId(String assetModelId) {
        this.assetModelId = assetModelId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public AssetSummary withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonProperty("hierarchies")
    public AssetHierarchy[] hierarchies;
    public AssetSummary withHierarchies(AssetHierarchy[] hierarchies) {
        this.hierarchies = hierarchies;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AssetSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateDate")
    public OffsetDateTime lastUpdateDate;
    public AssetSummary withLastUpdateDate(OffsetDateTime lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AssetSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("status")
    public AssetStatus status;
    public AssetSummary withStatus(AssetStatus status) {
        this.status = status;
        return this;
    }
}