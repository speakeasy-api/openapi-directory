package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * Job
 * Representation of a job returned by the ListJobs operation.
**/
public class Job {
    public OffsetDateTime creationDate;
    public Job withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public Boolean isCanceled;
    public Job withIsCanceled(Boolean isCanceled) {
        this.isCanceled = isCanceled;
        return this;
    }
    public String jobId;
    public Job withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    public JobTypeEnum jobType;
    public Job withJobType(JobTypeEnum jobType) {
        this.jobType = jobType;
        return this;
    }
}