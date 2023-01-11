package openapisdk.models.shared;


public enum UpdateTypeEnum {
    VERSION_UPDATE("VersionUpdate"),
    ENDPOINT_ACCESS_UPDATE("EndpointAccessUpdate"),
    LOGGING_UPDATE("LoggingUpdate"),
    CONFIG_UPDATE("ConfigUpdate"),
    ASSOCIATE_IDENTITY_PROVIDER_CONFIG("AssociateIdentityProviderConfig"),
    DISASSOCIATE_IDENTITY_PROVIDER_CONFIG("DisassociateIdentityProviderConfig"),
    ASSOCIATE_ENCRYPTION_CONFIG("AssociateEncryptionConfig"),
    ADDON_UPDATE("AddonUpdate");

    public final String value;

    private UpdateTypeEnum(String value) {
        this.value = value;
    }
}
