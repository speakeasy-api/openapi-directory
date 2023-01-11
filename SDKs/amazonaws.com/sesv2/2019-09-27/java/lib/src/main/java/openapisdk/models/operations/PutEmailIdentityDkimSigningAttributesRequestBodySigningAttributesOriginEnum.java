package openapisdk.models.operations;


public enum PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum {
    AWS_SES("AWS_SES"),
    EXTERNAL("EXTERNAL");

    public final String value;

    private PutEmailIdentityDkimSigningAttributesRequestBodySigningAttributesOriginEnum(String value) {
        this.value = value;
    }
}
