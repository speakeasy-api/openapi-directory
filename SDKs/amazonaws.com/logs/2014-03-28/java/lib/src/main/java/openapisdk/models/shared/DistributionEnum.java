package openapisdk.models.shared;


public enum DistributionEnum {
    RANDOM("Random"),
    BY_LOG_STREAM("ByLogStream");

    public final String value;

    private DistributionEnum(String value) {
        this.value = value;
    }
}
