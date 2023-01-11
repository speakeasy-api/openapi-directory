package openapisdk.models.operations;


public enum Idcer400ApplicationJsonErrorDescriptionEnum {
    PLEASE_PROVIDE_ALL_MANDATORY_PARAMETERS("Please provide all mandatory parameters"),
    BAD_REQUEST("Bad request"),
    THE_FORMAT_PARAMETER_IS_INVALID("The format parameter is invalid"),
    THE_TXN_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT("The txnId parameter must be in UUID format"),
    THE_CONSENT_ID_PARAMETER_MUST_BE_IN_UUID_FORMAT("The consentId parameter must be in UUID format");

    public final String value;

    private Idcer400ApplicationJsonErrorDescriptionEnum(String value) {
        this.value = value;
    }
}
