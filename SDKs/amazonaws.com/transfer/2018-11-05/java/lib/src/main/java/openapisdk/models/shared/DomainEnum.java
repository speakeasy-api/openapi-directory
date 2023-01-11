package openapisdk.models.shared;


public enum DomainEnum {
    S3("S3"),
    EFS("EFS");

    public final String value;

    private DomainEnum(String value) {
        this.value = value;
    }
}
