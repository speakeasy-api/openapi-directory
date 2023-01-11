package openapisdk.models.shared;


public enum ListJobsFilterKeyEnum {
    JOB_TYPE("jobType"),
    JOB_STATUS("jobStatus"),
    CREATED_AT("createdAt"),
    NAME("name");

    public final String value;

    private ListJobsFilterKeyEnum(String value) {
        this.value = value;
    }
}
