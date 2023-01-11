package openapisdk.models.shared;


public enum WebhookActivityAttributesV1EventEnum {
    RESOURCES_UPLOAD("resources.upload"),
    RESOURCES_DOWNLOAD("resources.download"),
    RESOURCES_DELETE("resources.delete"),
    RESOURCES_RENAME("resources.rename"),
    RESOURCES_COPY("resources.copy"),
    RESOURCES_MOVE("resources.move"),
    RESOURCES_COMPRESS("resources.compress"),
    RESOURCES_EXTRACT("resources.extract"),
    RESOURCES_CREATE_FOLDER("resources.createFolder"),
    SHARES_FORM_SUBMIT("shares.formSubmit");

    public final String value;

    private WebhookActivityAttributesV1EventEnum(String value) {
        this.value = value;
    }
}
