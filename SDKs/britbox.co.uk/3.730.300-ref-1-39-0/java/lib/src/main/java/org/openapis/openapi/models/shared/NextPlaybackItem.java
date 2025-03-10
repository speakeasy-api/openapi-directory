/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * NextPlaybackItem - The detail of the next item to play.
 */
public class NextPlaybackItem {
    /**
     * Time when the item corresponding to the itemId passed in by the client was
     * first watched by the user. Will be `undefined` if the user has never
     * watched the item.
     * 
     * It can be used to identify the scenario where the user has never watched a
     * show and we are suggesting they watch the first episode (i.e. it is
     * missing in this scenario)
     * 
     * **This will only be populated when a `showId` is passed in**
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("firstWatchedDate")
    public OffsetDateTime firstWatchedDate;

    public NextPlaybackItem withFirstWatchedDate(OffsetDateTime firstWatchedDate) {
        this.firstWatchedDate = firstWatchedDate;
        return this;
    }
    
    /**
     * Time when the item corresponding to the itemId passed in by the client was
     * last watched by the user. Will be `undefined` if the user has never
     * watched the item.
     * 
     * It can be used to identify the scenario where the user has never watched a
     * show and we are suggesting they watch the first episode (i.e. it is
     * missing in this scenario)
     * 
     * **This will only be populated when a `showId` is passed in**
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastWatchedDate")
    public OffsetDateTime lastWatchedDate;

    public NextPlaybackItem withLastWatchedDate(OffsetDateTime lastWatchedDate) {
        this.lastWatchedDate = lastWatchedDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public ItemDetail next;

    public NextPlaybackItem withNext(ItemDetail next) {
        this.next = next;
        return this;
    }
    
    /**
     * The id of the item used to determine the next item to play.
     */
    @JsonProperty("sourceItemId")
    public String sourceItemId;

    public NextPlaybackItem withSourceItemId(String sourceItemId) {
        this.sourceItemId = sourceItemId;
        return this;
    }
    
    /**
     * Field indicating the type or reason behind the suggestion.
     * 
     * Id Type   | Show Watched Status| Value            | Description
     * ----------|--------------------|------------------|---------------------------------
     * showId    | Unwatched          | StartWatching    |
     * showId    | Completely watched | RestartWatching  |
     * showId    | Partly watched     | ContinueWatching | Suggested episode partly watched
     * showId    | Partly watched     | Sequential       | Suggested episode unwatched
     * episodeId | Any                | Sequential       | Next episode in show
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestionType")
    public NextPlaybackItemSuggestionTypeEnum suggestionType;

    public NextPlaybackItem withSuggestionType(NextPlaybackItemSuggestionTypeEnum suggestionType) {
        this.suggestionType = suggestionType;
        return this;
    }
    
    public NextPlaybackItem(@JsonProperty("sourceItemId") String sourceItemId) {
        this.sourceItemId = sourceItemId;
  }
}
