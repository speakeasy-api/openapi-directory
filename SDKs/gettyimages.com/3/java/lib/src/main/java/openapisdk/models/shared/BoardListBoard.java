package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class BoardListBoard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("asset_count")
    public Integer assetCount;
    public BoardListBoard withAssetCount(Integer assetCount) {
        this.assetCount = assetCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("board_relationship")
    public String boardRelationship;
    public BoardListBoard withBoardRelationship(String boardRelationship) {
        this.boardRelationship = boardRelationship;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_created")
    public OffsetDateTime dateCreated;
    public BoardListBoard withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date_last_updated")
    public OffsetDateTime dateLastUpdated;
    public BoardListBoard withDateLastUpdated(OffsetDateTime dateLastUpdated) {
        this.dateLastUpdated = dateLastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BoardListBoard withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hero_asset")
    public Asset heroAsset;
    public BoardListBoard withHeroAsset(Asset heroAsset) {
        this.heroAsset = heroAsset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BoardListBoard withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BoardListBoard withName(String name) {
        this.name = name;
        return this;
    }
}