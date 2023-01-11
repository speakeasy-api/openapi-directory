package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBundleRecipientsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=bundle_id")
    public Integer bundleId;
    public PostBundleRecipientsRequestBody withBundleId(Integer bundleId) {
        this.bundleId = bundleId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=company")
    public String company;
    public PostBundleRecipientsRequestBody withCompany(String company) {
        this.company = company;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PostBundleRecipientsRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=note")
    public String note;
    public PostBundleRecipientsRequestBody withNote(String note) {
        this.note = note;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recipient")
    public String recipient;
    public PostBundleRecipientsRequestBody withRecipient(String recipient) {
        this.recipient = recipient;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=share_after_create")
    public Boolean shareAfterCreate;
    public PostBundleRecipientsRequestBody withShareAfterCreate(Boolean shareAfterCreate) {
        this.shareAfterCreate = shareAfterCreate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostBundleRecipientsRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}