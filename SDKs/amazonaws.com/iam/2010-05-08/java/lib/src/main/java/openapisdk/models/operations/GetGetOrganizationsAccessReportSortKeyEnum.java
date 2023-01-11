package openapisdk.models.operations;


public enum GetGetOrganizationsAccessReportSortKeyEnum {
    SERVICE_NAMESPACE_ASCENDING("SERVICE_NAMESPACE_ASCENDING"),
    SERVICE_NAMESPACE_DESCENDING("SERVICE_NAMESPACE_DESCENDING"),
    LAST_AUTHENTICATED_TIME_ASCENDING("LAST_AUTHENTICATED_TIME_ASCENDING"),
    LAST_AUTHENTICATED_TIME_DESCENDING("LAST_AUTHENTICATED_TIME_DESCENDING");

    public final String value;

    private GetGetOrganizationsAccessReportSortKeyEnum(String value) {
        this.value = value;
    }
}
