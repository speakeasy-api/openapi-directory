package openapisdk.models.shared;


public enum EnvironmentTypeEnum {
    SSH("ssh"),
    EC2("ec2");

    public final String value;

    private EnvironmentTypeEnum(String value) {
        this.value = value;
    }
}
