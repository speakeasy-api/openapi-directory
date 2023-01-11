package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AssetModelSummary
 * Contains a summary of an asset model.
**/
public class AssetModelSummary {
    @JsonProperty("arn")
    public String arn;
    public AssetModelSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public AssetModelSummary withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public AssetModelSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AssetModelSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateDate")
    public OffsetDateTime lastUpdateDate;
    public AssetModelSummary withLastUpdateDate(OffsetDateTime lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AssetModelSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("status")
    public AssetModelStatus status;
    public AssetModelSummary withStatus(AssetModelStatus status) {
        this.status = status;
        return this;
    }
}