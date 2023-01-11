package openapisdk.models.shared;


public enum EnvironmentTypeEnum {
    WINDOWS_CONTAINER("WINDOWS_CONTAINER"),
    LINUX_CONTAINER("LINUX_CONTAINER"),
    LINUX_GPU_CONTAINER("LINUX_GPU_CONTAINER"),
    ARM_CONTAINER("ARM_CONTAINER"),
    WINDOWS_SERVER2019_CONTAINER("WINDOWS_SERVER_2019_CONTAINER");

    public final String value;

    private EnvironmentTypeEnum(String value) {
        this.value = value;
    }
}
