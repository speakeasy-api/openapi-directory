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
 * DocumentClassifierFilter
 * Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the operation.
**/
public class DocumentClassifierFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ModelStatusEnum status;
    public DocumentClassifierFilter withStatus(ModelStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmitTimeAfter")
    public OffsetDateTime submitTimeAfter;
    public DocumentClassifierFilter withSubmitTimeAfter(OffsetDateTime submitTimeAfter) {
        this.submitTimeAfter = submitTimeAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("SubmitTimeBefore")
    public OffsetDateTime submitTimeBefore;
    public DocumentClassifierFilter withSubmitTimeBefore(OffsetDateTime submitTimeBefore) {
        this.submitTimeBefore = submitTimeBefore;
        return this;
    }
}