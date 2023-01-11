package openapisdk.models.shared;


public enum ListJobsSortAttributeNameEnum {
    CREATED_AT("createdAt"),
    JOB_STATUS("jobStatus"),
    NAME("name"),
    JOB_TYPE("jobType");

    public final String value;

    private ListJobsSortAttributeNameEnum(String value) {
        this.value = value;
    }
}
