package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobDetails
 * The number of documents successfully and unsuccessfully processed during a translation job.
**/
public class JobDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentsWithErrorsCount")
    public Long documentsWithErrorsCount;
    public JobDetails withDocumentsWithErrorsCount(Long documentsWithErrorsCount) {
        this.documentsWithErrorsCount = documentsWithErrorsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputDocumentsCount")
    public Long inputDocumentsCount;
    public JobDetails withInputDocumentsCount(Long inputDocumentsCount) {
        this.inputDocumentsCount = inputDocumentsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TranslatedDocumentsCount")
    public Long translatedDocumentsCount;
    public JobDetails withTranslatedDocumentsCount(Long translatedDocumentsCount) {
        this.translatedDocumentsCount = translatedDocumentsCount;
        return this;
    }
}