package openapisdk.models.operations;


public enum ReposCreateDeploymentStatusRequestBodyEnvironmentEnum {
    PRODUCTION("production"),
    STAGING("staging"),
    QA("qa");

    public final String value;

    private ReposCreateDeploymentStatusRequestBodyEnvironmentEnum(String value) {
        this.value = value;
    }
}
