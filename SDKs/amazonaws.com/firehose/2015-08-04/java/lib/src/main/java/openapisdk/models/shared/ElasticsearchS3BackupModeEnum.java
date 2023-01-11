package openapisdk.models.shared;


public enum ElasticsearchS3BackupModeEnum {
    FAILED_DOCUMENTS_ONLY("FailedDocumentsOnly"),
    ALL_DOCUMENTS("AllDocuments");

    public final String value;

    private ElasticsearchS3BackupModeEnum(String value) {
        this.value = value;
    }
}
