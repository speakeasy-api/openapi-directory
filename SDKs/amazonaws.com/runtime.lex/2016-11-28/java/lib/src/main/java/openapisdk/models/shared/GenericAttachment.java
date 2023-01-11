package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenericAttachment
 * Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text. 
**/
public class GenericAttachment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attachmentLinkUrl")
    public String attachmentLinkUrl;
    public GenericAttachment withAttachmentLinkUrl(String attachmentLinkUrl) {
        this.attachmentLinkUrl = attachmentLinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buttons")
    public Button[] buttons;
    public GenericAttachment withButtons(Button[] buttons) {
        this.buttons = buttons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public GenericAttachment withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subTitle")
    public String subTitle;
    public GenericAttachment withSubTitle(String subTitle) {
        this.subTitle = subTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GenericAttachment withTitle(String title) {
        this.title = title;
        return this;
    }
}