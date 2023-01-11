package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBundlesIdShareRequestBody {
    @SpeakeasyMetadata("multipartForm:name=note")
    public String note;
    public PostBundlesIdShareRequestBody withNote(String note) {
        this.note = note;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=recipients,json")
    public java.util.Map<String, Object>[] recipients;
    public PostBundlesIdShareRequestBody withRecipients(java.util.Map<String, Object>[] recipients) {
        this.recipients = recipients;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=to,json")
    public String[] to;
    public PostBundlesIdShareRequestBody withTo(String[] to) {
        this.to = to;
        return this;
    }
}