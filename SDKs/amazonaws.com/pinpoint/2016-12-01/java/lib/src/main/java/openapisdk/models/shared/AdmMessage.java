package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdmMessage
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel.
**/
public class AdmMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Action")
    public ActionEnum action;
    public AdmMessage withAction(ActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Body")
    public String body;
    public AdmMessage withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsolidationKey")
    public String consolidationKey;
    public AdmMessage withConsolidationKey(String consolidationKey) {
        this.consolidationKey = consolidationKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public java.util.Map<String, String> data;
    public AdmMessage withData(java.util.Map<String, String> data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpiresAfter")
    public String expiresAfter;
    public AdmMessage withExpiresAfter(String expiresAfter) {
        this.expiresAfter = expiresAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IconReference")
    public String iconReference;
    public AdmMessage withIconReference(String iconReference) {
        this.iconReference = iconReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageIconUrl")
    public String imageIconUrl;
    public AdmMessage withImageIconUrl(String imageIconUrl) {
        this.imageIconUrl = imageIconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageUrl")
    public String imageUrl;
    public AdmMessage withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MD5")
    public String md5;
    public AdmMessage withMd5(String md5) {
        this.md5 = md5;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RawContent")
    public String rawContent;
    public AdmMessage withRawContent(String rawContent) {
        this.rawContent = rawContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SilentPush")
    public Boolean silentPush;
    public AdmMessage withSilentPush(Boolean silentPush) {
        this.silentPush = silentPush;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmallImageIconUrl")
    public String smallImageIconUrl;
    public AdmMessage withSmallImageIconUrl(String smallImageIconUrl) {
        this.smallImageIconUrl = smallImageIconUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sound")
    public String sound;
    public AdmMessage withSound(String sound) {
        this.sound = sound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Substitutions")
    public java.util.Map<String, String[]> substitutions;
    public AdmMessage withSubstitutions(java.util.Map<String, String[]> substitutions) {
        this.substitutions = substitutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Title")
    public String title;
    public AdmMessage withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Url")
    public String url;
    public AdmMessage withUrl(String url) {
        this.url = url;
        return this;
    }
}