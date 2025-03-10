/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * JobDetails - Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.
 */
public class JobDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDefinedInJob")
    public IsDefinedInJobEnum isDefinedInJob;

    public JobDetails withIsDefinedInJob(IsDefinedInJobEnum isDefinedInJob) {
        this.isDefinedInJob = isDefinedInJob;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isMonitoredByJob")
    public IsMonitoredByJobEnum isMonitoredByJob;

    public JobDetails withIsMonitoredByJob(IsMonitoredByJobEnum isMonitoredByJob) {
        this.isMonitoredByJob = isMonitoredByJob;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastJobId")
    public String lastJobId;

    public JobDetails withLastJobId(String lastJobId) {
        this.lastJobId = lastJobId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("lastJobRunTime")
    public OffsetDateTime lastJobRunTime;

    public JobDetails withLastJobRunTime(OffsetDateTime lastJobRunTime) {
        this.lastJobRunTime = lastJobRunTime;
        return this;
    }
    
    public JobDetails(){}
}
