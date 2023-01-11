package openapisdk.models.shared;


public enum SubmissionEntryMessageClassEnum {
    FLASH_SMS("FLASH_SMS"),
    ME_SPECIFIC("ME_SPECIFIC"),
    SIM_SPECIFIC("SIM_SPECIFIC"),
    TE_SPECIFIC("TE_SPECIFIC");

    public final String value;

    private SubmissionEntryMessageClassEnum(String value) {
        this.value = value;
    }
}
