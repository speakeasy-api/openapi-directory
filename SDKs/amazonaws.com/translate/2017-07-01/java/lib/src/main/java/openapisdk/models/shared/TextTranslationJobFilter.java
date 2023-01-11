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
 * TextTranslationJobFilter
 * Provides information for filtering a list of translation jobs. For more information, see <a>ListTextTranslationJobs</a>.
**/
public class TextTranslationJobFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public TextTranslationJobFilter withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobStatus")
    public JobStatusEnum jobStatus;
    public TextTranslationJobFilter withJobStatus(JobStatusEnum jobStatus) {
        this.jobStatus = jobStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmittedAfterTime")
    public OffsetDateTime submittedAfterTime;
    public TextTranslationJobFilter withSubmittedAfterTime(OffsetDateTime submittedAfterTime) {
        this.submittedAfterTime = submittedAfterTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmittedBeforeTime")
    public OffsetDateTime submittedBeforeTime;
    public TextTranslationJobFilter withSubmittedBeforeTime(OffsetDateTime submittedBeforeTime) {
        this.submittedBeforeTime = submittedBeforeTime;
        return this;
    }
}