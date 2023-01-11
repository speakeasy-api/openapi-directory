package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AssociatedAssetsSummary
 * Contains a summary of an associated asset.
**/
public class AssociatedAssetsSummary {
    @JsonProperty("arn")
    public String arn;
    public AssociatedAssetsSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("assetModelId")
    public String assetModelId;
    public AssociatedAssetsSummary withAssetModelId(String assetModelId) {
        this.assetModelId = assetModelId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public AssociatedAssetsSummary withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonProperty("hierarchies")
    public AssetHierarchy[] hierarchies;
    public AssociatedAssetsSummary withHierarchies(AssetHierarchy[] hierarchies) {
        this.hierarchies = hierarchies;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AssociatedAssetsSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateDate")
    public OffsetDateTime lastUpdateDate;
    public AssociatedAssetsSummary withLastUpdateDate(OffsetDateTime lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AssociatedAssetsSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("status")
    public AssetStatus status;
    public AssociatedAssetsSummary withStatus(AssetStatus status) {
        this.status = status;
        return this;
    }
}