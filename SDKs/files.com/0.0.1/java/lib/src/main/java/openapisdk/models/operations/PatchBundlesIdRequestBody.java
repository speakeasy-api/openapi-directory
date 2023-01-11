package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PatchBundlesIdRequestBody {
    @SpeakeasyMetadata("multipartForm:name=clickwrap_id")
    public Integer clickwrapId;
    public PatchBundlesIdRequestBody withClickwrapId(Integer clickwrapId) {
        this.clickwrapId = clickwrapId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=code")
    public String code;
    public PatchBundlesIdRequestBody withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=description")
    public String description;
    public PatchBundlesIdRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=expires_at")
    public OffsetDateTime expiresAt;
    public PatchBundlesIdRequestBody withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=form_field_set_id")
    public Integer formFieldSetId;
    public PatchBundlesIdRequestBody withFormFieldSetId(Integer formFieldSetId) {
        this.formFieldSetId = formFieldSetId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=inbox_id")
    public Integer inboxId;
    public PatchBundlesIdRequestBody withInboxId(Integer inboxId) {
        this.inboxId = inboxId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=max_uses")
    public Integer maxUses;
    public PatchBundlesIdRequestBody withMaxUses(Integer maxUses) {
        this.maxUses = maxUses;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=note")
    public String note;
    public PatchBundlesIdRequestBody withNote(String note) {
        this.note = note;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public PatchBundlesIdRequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=paths,json")
    public String[] paths;
    public PatchBundlesIdRequestBody withPaths(String[] paths) {
        this.paths = paths;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=preview_only")
    public Boolean previewOnly;
    public PatchBundlesIdRequestBody withPreviewOnly(Boolean previewOnly) {
        this.previewOnly = previewOnly;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=require_registration")
    public Boolean requireRegistration;
    public PatchBundlesIdRequestBody withRequireRegistration(Boolean requireRegistration) {
        this.requireRegistration = requireRegistration;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=require_share_recipient")
    public Boolean requireShareRecipient;
    public PatchBundlesIdRequestBody withRequireShareRecipient(Boolean requireShareRecipient) {
        this.requireShareRecipient = requireShareRecipient;
        return this;
    }
}