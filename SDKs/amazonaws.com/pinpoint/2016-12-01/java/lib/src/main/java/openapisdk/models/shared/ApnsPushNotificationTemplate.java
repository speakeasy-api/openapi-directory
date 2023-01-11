package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApnsPushNotificationTemplate
 * Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.
**/
public class ApnsPushNotificationTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Action")
    public ActionEnum action;
    public ApnsPushNotificationTemplate withAction(ActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Body")
    public String body;
    public ApnsPushNotificationTemplate withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaUrl")
    public String mediaUrl;
    public ApnsPushNotificationTemplate withMediaUrl(String mediaUrl) {
        this.mediaUrl = mediaUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RawContent")
    public String rawContent;
    public ApnsPushNotificationTemplate withRawContent(String rawContent) {
        this.rawContent = rawContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sound")
    public String sound;
    public ApnsPushNotificationTemplate withSound(String sound) {
        this.sound = sound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public ApnsPushNotificationTemplate withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Url")
    public String url;
    public ApnsPushNotificationTemplate withUrl(String url) {
        this.url = url;
        return this;
    }
}