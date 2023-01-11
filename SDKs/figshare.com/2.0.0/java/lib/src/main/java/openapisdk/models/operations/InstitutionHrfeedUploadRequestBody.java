package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InstitutionHrfeedUploadRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public InstitutionHrfeedUploadRequestBodyHrfeed hrfeed;
    public InstitutionHrfeedUploadRequestBody withHrfeed(InstitutionHrfeedUploadRequestBodyHrfeed hrfeed) {
        this.hrfeed = hrfeed;
        return this;
    }
}