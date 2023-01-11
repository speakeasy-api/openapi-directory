package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePushTemplateRequestBodyPushNotificationTemplateRequest
 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
**/
public class UpdatePushTemplateRequestBodyPushNotificationTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ADM")
    public openapisdk.models.shared.AndroidPushNotificationTemplate adm;
    public UpdatePushTemplateRequestBodyPushNotificationTemplateRequest withAdm(openapisdk.models.shared.AndroidPushNotificationTemplate adm) {
        this.adm = adm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("APNS")
    public openapisdk.models.shared.ApnsPushNotificationTemplate apns;
    public UpdatePushTemplateRequestBodyPushNotificationTemplateRequest withApns(openapisdk.models.shared.ApnsPushNotificationTemplate apns) {
        this.apns = apns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Baidu")
    public openapisdk.models.shared.AndroidPushNotificationTemplate baidu;
    public UpdatePushTemplateRequestBodyPushNotificationTemplateRequest withBaidu(openapisdk.models.shared.AndroidPushNotificationTemplate baidu) {
        this.baidu = baidu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Default")
    public openapisdk.models.shared.DefaultPushNotificationTemplate default_;
    public UpdatePushTemplateRequestBodyPushNotificationTemplateRequest withDefault(openapisdk.models.shared.DefaultPushNotificationTemplate default_) {
        this.default_ = default_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultSubstitutions")
    public String defaultSubstitutions;
    public UpdatePushTemplateRequestBodyPushNotificationTemplateRequest withDefaultSubstitutions(String defaultSubstitutions) {
        this.defaultSubstitutions = defaultSubstitutions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GCM")
    public openapisdk.models.shared.AndroidPushNotificationTemplate gcm;
    public UpdatePushTemplateRequestBodyPushNotificationTemplateRequest withGcm(openapisdk.models.shared.AndroidPushNotificationTemplate gcm) {
        this.gcm = gcm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecommenderId")
    public String recommenderId;
    public UpdatePushTemplateRequestBodyPushNotificationTemplateRequest withRecommenderId(String recommenderId) {
        this.recommenderId = recommenderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateDescription")
    public String templateDescription;
    public UpdatePushTemplateRequestBodyPushNotificationTemplateRequest withTemplateDescription(String templateDescription) {
        this.templateDescription = templateDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public UpdatePushTemplateRequestBodyPushNotificationTemplateRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}