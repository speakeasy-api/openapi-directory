package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApnsMessage
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.
**/
public class ApnsMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("APNSPushType")
    public String apnsPushType;
    public ApnsMessage withApnsPushType(String apnsPushType) {
        this.apnsPushType = apnsPushType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Action")
    public ActionEnum action;
    public ApnsMessage withAction(ActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Badge")
    public Long badge;
    public ApnsMessage withBadge(Long badge) {
        this.badge = badge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Body")
    public String body;
    public ApnsMessage withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Category")
    public String category;
    public ApnsMessage withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CollapseId")
    public String collapseId;
    public ApnsMessage withCollapseId(String collapseId) {
        this.collapseId = collapseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public java.util.Map<String, String> data;
    public ApnsMessage withData(java.util.Map<String, String> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediaUrl")
    public String mediaUrl;
    public ApnsMessage withMediaUrl(String mediaUrl) {
        this.mediaUrl = mediaUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreferredAuthenticationMethod")
    public String preferredAuthenticationMethod;
    public ApnsMessage withPreferredAuthenticationMethod(String preferredAuthenticationMethod) {
        this.preferredAuthenticationMethod = preferredAuthenticationMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Priority")
    public String priority;
    public ApnsMessage withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RawContent")
    public String rawContent;
    public ApnsMessage withRawContent(String rawContent) {
        this.rawContent = rawContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SilentPush")
    public Boolean silentPush;
    public ApnsMessage withSilentPush(Boolean silentPush) {
        this.silentPush = silentPush;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sound")
    public String sound;
    public ApnsMessage withSound(String sound) {
        this.sound = sound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Substitutions")
    public java.util.Map<String, String[]> substitutions;
    public ApnsMessage withSubstitutions(java.util.Map<String, String[]> substitutions) {
        this.substitutions = substitutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThreadId")
    public String threadId;
    public ApnsMessage withThreadId(String threadId) {
        this.threadId = threadId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeToLive")
    public Long timeToLive;
    public ApnsMessage withTimeToLive(Long timeToLive) {
        this.timeToLive = timeToLive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public ApnsMessage withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Url")
    public String url;
    public ApnsMessage withUrl(String url) {
        this.url = url;
        return this;
    }
}