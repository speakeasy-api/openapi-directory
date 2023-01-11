package openapisdk.models.shared;


public enum RecordCopyrightEnum {
    ALL_RIGHTS_RESERVED("All rights reserved"),
    SOME_RIGHTS_RESERVED("Some rights reserved"),
    NO_KNOWN_COPYRIGHT_RESTRICTIONS("No known copyright restrictions"),
    UNKNOWN("Unknown");

    public final String value;

    private RecordCopyrightEnum(String value) {
        this.value = value;
    }
}
