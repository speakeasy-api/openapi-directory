package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageResponseCard
 * <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p>
**/
public class ImageResponseCard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buttons")
    public Button[] buttons;
    public ImageResponseCard withButtons(Button[] buttons) {
        this.buttons = buttons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public ImageResponseCard withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtitle")
    public String subtitle;
    public ImageResponseCard withSubtitle(String subtitle) {
        this.subtitle = subtitle;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ImageResponseCard withTitle(String title) {
        this.title = title;
        return this;
    }
}