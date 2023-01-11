package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class BoardDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_count")
    public Integer assetCount;
    public BoardDetail withAssetCount(Integer assetCount) {
        this.assetCount = assetCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets")
    public Asset[] assets;
    public BoardDetail withAssets(Asset[] assets) {
        this.assets = assets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment_count")
    public Integer commentCount;
    public BoardDetail withCommentCount(Integer commentCount) {
        this.commentCount = commentCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public BoardDetail withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_last_updated")
    public OffsetDateTime dateLastUpdated;
    public BoardDetail withDateLastUpdated(OffsetDateTime dateLastUpdated) {
        this.dateLastUpdated = dateLastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BoardDetail withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BoardDetail withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;
    public BoardDetail withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BoardDetail withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissions")
    public BoardPermissions permissions;
    public BoardDetail withPermissions(BoardPermissions permissions) {
        this.permissions = permissions;
        return this;
    }
}