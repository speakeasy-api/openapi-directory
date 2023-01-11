package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostInboxRecipientsRequestBody {
    @SpeakeasyMetadata("multipartForm:name=company")
    public String company;
    public PostInboxRecipientsRequestBody withCompany(String company) {
        this.company = company;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=inbox_id")
    public Integer inboxId;
    public PostInboxRecipientsRequestBody withInboxId(Integer inboxId) {
        this.inboxId = inboxId;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public PostInboxRecipientsRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=note")
    public String note;
    public PostInboxRecipientsRequestBody withNote(String note) {
        this.note = note;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recipient")
    public String recipient;
    public PostInboxRecipientsRequestBody withRecipient(String recipient) {
        this.recipient = recipient;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=share_after_create")
    public Boolean shareAfterCreate;
    public PostInboxRecipientsRequestBody withShareAfterCreate(Boolean shareAfterCreate) {
        this.shareAfterCreate = shareAfterCreate;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_id")
    public Integer userId;
    public PostInboxRecipientsRequestBody withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}