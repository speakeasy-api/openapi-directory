package openapisdk.models.shared;


public enum TargetDbTypeEnum {
    SPECIFIC_DATABASE("specific-database"),
    MULTIPLE_DATABASES("multiple-databases");

    public final String value;

    private TargetDbTypeEnum(String value) {
        this.value = value;
    }
}
