package openapisdk.models.shared;


public enum AmiTypesEnum {
    AL2_X8664("AL2_x86_64"),
    AL2_X8664_GPU("AL2_x86_64_GPU"),
    AL2_ARM64("AL2_ARM_64"),
    CUSTOM("CUSTOM");

    public final String value;

    private AmiTypesEnum(String value) {
        this.value = value;
    }
}
