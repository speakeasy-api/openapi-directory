package openapisdk.models.shared;



/**
 * ListJobsOutput
 * Output structure for the ListJobs operation.
**/
public class ListJobsOutput {
    public Boolean isTruncated;
    public ListJobsOutput withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public Job[] jobs;
    public ListJobsOutput withJobs(Job[] jobs) {
        this.jobs = jobs;
        return this;
    }
}