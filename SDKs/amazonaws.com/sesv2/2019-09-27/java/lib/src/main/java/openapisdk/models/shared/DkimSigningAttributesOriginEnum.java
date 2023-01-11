package openapisdk.models.shared;


public enum DkimSigningAttributesOriginEnum {
    AWS_SES("AWS_SES"),
    EXTERNAL("EXTERNAL");

    public final String value;

    private DkimSigningAttributesOriginEnum(String value) {
        this.value = value;
    }
}
