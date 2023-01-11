package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DefaultPushNotificationTemplate
 * Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.
**/
public class DefaultPushNotificationTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Action")
    public ActionEnum action;
    public DefaultPushNotificationTemplate withAction(ActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Body")
    public String body;
    public DefaultPushNotificationTemplate withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sound")
    public String sound;
    public DefaultPushNotificationTemplate withSound(String sound) {
        this.sound = sound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public DefaultPushNotificationTemplate withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Url")
    public String url;
    public DefaultPushNotificationTemplate withUrl(String url) {
        this.url = url;
        return this;
    }
}