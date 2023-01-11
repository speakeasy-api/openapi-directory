package openapisdk.models.shared;


public enum TrustStateEnum {
    CREATING("Creating"),
    CREATED("Created"),
    VERIFYING("Verifying"),
    VERIFY_FAILED("VerifyFailed"),
    VERIFIED("Verified"),
    UPDATING("Updating"),
    UPDATE_FAILED("UpdateFailed"),
    UPDATED("Updated"),
    DELETING("Deleting"),
    DELETED("Deleted"),
    FAILED("Failed");

    public final String value;

    private TrustStateEnum(String value) {
        this.value = value;
    }
}
