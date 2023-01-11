package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BundleEntity
 * Create Bundle
**/
public class BundleEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickwrap_body")
    public String clickwrapBody;
    public BundleEntity withClickwrapBody(String clickwrapBody) {
        this.clickwrapBody = clickwrapBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickwrap_id")
    public Integer clickwrapId;
    public BundleEntity withClickwrapId(Integer clickwrapId) {
        this.clickwrapId = clickwrapId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public BundleEntity withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public BundleEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BundleEntity withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expires_at")
    public OffsetDateTime expiresAt;
    public BundleEntity withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_field_set")
    public FormFieldSetEntity formFieldSet;
    public BundleEntity withFormFieldSet(FormFieldSetEntity formFieldSet) {
        this.formFieldSet = formFieldSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_inbox")
    public Boolean hasInbox;
    public BundleEntity withHasInbox(Boolean hasInbox) {
        this.hasInbox = hasInbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public BundleEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbox_id")
    public Integer inboxId;
    public BundleEntity withInboxId(Integer inboxId) {
        this.inboxId = inboxId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_uses")
    public Integer maxUses;
    public BundleEntity withMaxUses(Integer maxUses) {
        this.maxUses = maxUses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public BundleEntity withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password_protected")
    public Boolean passwordProtected;
    public BundleEntity withPasswordProtected(Boolean passwordProtected) {
        this.passwordProtected = passwordProtected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paths")
    public String[] paths;
    public BundleEntity withPaths(String[] paths) {
        this.paths = paths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preview_only")
    public Boolean previewOnly;
    public BundleEntity withPreviewOnly(Boolean previewOnly) {
        this.previewOnly = previewOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_registration")
    public Boolean requireRegistration;
    public BundleEntity withRequireRegistration(Boolean requireRegistration) {
        this.requireRegistration = requireRegistration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("require_share_recipient")
    public Boolean requireShareRecipient;
    public BundleEntity withRequireShareRecipient(Boolean requireShareRecipient) {
        this.requireShareRecipient = requireShareRecipient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public BundleEntity withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Integer userId;
    public BundleEntity withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public BundleEntity withUsername(String username) {
        this.username = username;
        return this;
    }
}