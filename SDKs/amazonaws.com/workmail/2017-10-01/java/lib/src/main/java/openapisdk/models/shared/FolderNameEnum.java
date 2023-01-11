package openapisdk.models.shared;


public enum FolderNameEnum {
    INBOX("INBOX"),
    DELETED_ITEMS("DELETED_ITEMS"),
    SENT_ITEMS("SENT_ITEMS"),
    DRAFTS("DRAFTS"),
    JUNK_EMAIL("JUNK_EMAIL");

    public final String value;

    private FolderNameEnum(String value) {
        this.value = value;
    }
}
