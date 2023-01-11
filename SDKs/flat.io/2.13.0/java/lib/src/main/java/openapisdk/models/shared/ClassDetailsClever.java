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
 * ClassDetailsClever
 * Clever.com section-related information
**/
public class ClassDetailsClever {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public ClassDetailsClever withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ClassDetailsClever withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modificationDate")
    public OffsetDateTime modificationDate;
    public ClassDetailsClever withModificationDate(OffsetDateTime modificationDate) {
        this.modificationDate = modificationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public ClassDetailsCleverSubjectEnum subject;
    public ClassDetailsClever withSubject(ClassDetailsCleverSubjectEnum subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("termEndDate")
    public OffsetDateTime termEndDate;
    public ClassDetailsClever withTermEndDate(OffsetDateTime termEndDate) {
        this.termEndDate = termEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("termName")
    public String termName;
    public ClassDetailsClever withTermName(String termName) {
        this.termName = termName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("termStartDate")
    public OffsetDateTime termStartDate;
    public ClassDetailsClever withTermStartDate(OffsetDateTime termStartDate) {
        this.termStartDate = termStartDate;
        return this;
    }
}