package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionHrfeedUploadRequestBodyHrfeed {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public InstitutionHrfeedUploadRequestBodyHrfeed withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=hrfeed")
    public String hrfeed;
    public InstitutionHrfeedUploadRequestBodyHrfeed withHrfeed(String hrfeed) {
        this.hrfeed = hrfeed;
        return this;
    }
}