package openapisdk.models.shared;


public enum DatePartitionSequenceValueEnum {
    YYYYMMDD("YYYYMMDD"),
    YYYYMMDDHH("YYYYMMDDHH"),
    YYYYMM("YYYYMM"),
    MMYYYYDD("MMYYYYDD"),
    DDMMYYYY("DDMMYYYY");

    public final String value;

    private DatePartitionSequenceValueEnum(String value) {
        this.value = value;
    }
}
