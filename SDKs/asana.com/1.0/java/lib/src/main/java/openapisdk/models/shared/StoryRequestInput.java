package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StoryRequestInput
 * A story represents an activity associated with an object in the Asana system.
**/
public class StoryRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_text")
    public String htmlText;
    public StoryRequestInput withHtmlText(String htmlText) {
        this.htmlText = htmlText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_pinned")
    public Boolean isPinned;
    public StoryRequestInput withIsPinned(Boolean isPinned) {
        this.isPinned = isPinned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticker_name")
    public StoryRequestStickerNameEnum stickerName;
    public StoryRequestInput withStickerName(StoryRequestStickerNameEnum stickerName) {
        this.stickerName = stickerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public StoryRequestInput withText(String text) {
        this.text = text;
        return this;
    }
}