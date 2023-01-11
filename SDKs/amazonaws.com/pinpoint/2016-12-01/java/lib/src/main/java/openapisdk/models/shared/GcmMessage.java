package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GcmMessage
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
**/
public class GcmMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Action")
    public ActionEnum action;
    public GcmMessage withAction(ActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Body")
    public String body;
    public GcmMessage withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CollapseKey")
    public String collapseKey;
    public GcmMessage withCollapseKey(String collapseKey) {
        this.collapseKey = collapseKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public java.util.Map<String, String> data;
    public GcmMessage withData(java.util.Map<String, String> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IconReference")
    public String iconReference;
    public GcmMessage withIconReference(String iconReference) {
        this.iconReference = iconReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageIconUrl")
    public String imageIconUrl;
    public GcmMessage withImageIconUrl(String imageIconUrl) {
        this.imageIconUrl = imageIconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageUrl")
    public String imageUrl;
    public GcmMessage withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Priority")
    public String priority;
    public GcmMessage withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RawContent")
    public String rawContent;
    public GcmMessage withRawContent(String rawContent) {
        this.rawContent = rawContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RestrictedPackageName")
    public String restrictedPackageName;
    public GcmMessage withRestrictedPackageName(String restrictedPackageName) {
        this.restrictedPackageName = restrictedPackageName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SilentPush")
    public Boolean silentPush;
    public GcmMessage withSilentPush(Boolean silentPush) {
        this.silentPush = silentPush;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmallImageIconUrl")
    public String smallImageIconUrl;
    public GcmMessage withSmallImageIconUrl(String smallImageIconUrl) {
        this.smallImageIconUrl = smallImageIconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sound")
    public String sound;
    public GcmMessage withSound(String sound) {
        this.sound = sound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Substitutions")
    public java.util.Map<String, String[]> substitutions;
    public GcmMessage withSubstitutions(java.util.Map<String, String[]> substitutions) {
        this.substitutions = substitutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeToLive")
    public Long timeToLive;
    public GcmMessage withTimeToLive(Long timeToLive) {
        this.timeToLive = timeToLive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public GcmMessage withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Url")
    public String url;
    public GcmMessage withUrl(String url) {
        this.url = url;
        return this;
    }
}