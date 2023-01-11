package openapisdk.models.shared;


public enum BuildPhaseTypeEnum {
    SUBMITTED("SUBMITTED"),
    QUEUED("QUEUED"),
    PROVISIONING("PROVISIONING"),
    DOWNLOAD_SOURCE("DOWNLOAD_SOURCE"),
    INSTALL("INSTALL"),
    PRE_BUILD("PRE_BUILD"),
    BUILD("BUILD"),
    POST_BUILD("POST_BUILD"),
    UPLOAD_ARTIFACTS("UPLOAD_ARTIFACTS"),
    FINALIZING("FINALIZING"),
    COMPLETED("COMPLETED");

    public final String value;

    private BuildPhaseTypeEnum(String value) {
        this.value = value;
    }
}
