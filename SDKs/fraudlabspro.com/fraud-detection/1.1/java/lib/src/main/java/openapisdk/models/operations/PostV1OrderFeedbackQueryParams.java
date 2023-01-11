package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV1OrderFeedbackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public PostV1OrderFeedbackActionEnum action;
    public PostV1OrderFeedbackQueryParams withAction(PostV1OrderFeedbackActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public PostV1OrderFeedbackFormatEnum format;
    public PostV1OrderFeedbackQueryParams withFormat(PostV1OrderFeedbackFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public PostV1OrderFeedbackQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=key")
    public String key;
    public PostV1OrderFeedbackQueryParams withKey(String key) {
        this.key = key;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=notes")
    public String notes;
    public PostV1OrderFeedbackQueryParams withNotes(String notes) {
        this.notes = notes;
        return this;
    }
}