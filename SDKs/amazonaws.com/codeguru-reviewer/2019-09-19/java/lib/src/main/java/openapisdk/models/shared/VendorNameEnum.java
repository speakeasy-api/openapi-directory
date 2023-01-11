package openapisdk.models.shared;


public enum VendorNameEnum {
    GIT_HUB("GitHub"),
    GIT_LAB("GitLab"),
    NATIVE_S3("NativeS3");

    public final String value;

    private VendorNameEnum(String value) {
        this.value = value;
    }
}
