package openapisdk.models.shared;


public enum AnomalyDetectorStatusEnum {
    ACTIVE("ACTIVE"),
    ACTIVATING("ACTIVATING"),
    DELETING("DELETING"),
    FAILED("FAILED"),
    INACTIVE("INACTIVE"),
    LEARNING("LEARNING"),
    BACK_TEST_ACTIVATING("BACK_TEST_ACTIVATING"),
    BACK_TEST_ACTIVE("BACK_TEST_ACTIVE"),
    BACK_TEST_COMPLETE("BACK_TEST_COMPLETE");

    public final String value;

    private AnomalyDetectorStatusEnum(String value) {
        this.value = value;
    }
}
