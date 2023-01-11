package openapisdk.models.shared;


public enum ProtocolExceptionReasonEnum {
    UNSUPPORTED("unsupported"),
    UNAUTHORIZED("unauthorized"),
    UNEXPECTED("unexpected"),
    INVALID("invalid"),
    UNPARSEABLE("unparseable"),
    DEPRECATED("deprecated"),
    INTERNAL("internal"),
    COMPLEX("complex"),
    BUSY("busy");

    public final String value;

    private ProtocolExceptionReasonEnum(String value) {
        this.value = value;
    }
}
