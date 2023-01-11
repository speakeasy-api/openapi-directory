package openapisdk.models.shared;


public enum PartitionEnum {
    AWS("aws"),
    AWS_CN("aws-cn"),
    AWS_US_GOV("aws-us-gov");

    public final String value;

    private PartitionEnum(String value) {
        this.value = value;
    }
}
