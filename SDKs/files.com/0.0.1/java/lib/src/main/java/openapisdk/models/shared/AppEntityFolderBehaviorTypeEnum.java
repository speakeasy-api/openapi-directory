package openapisdk.models.shared;


public enum AppEntityFolderBehaviorTypeEnum {
    WEBHOOK("webhook"),
    FILE_EXPIRATION("file_expiration"),
    AUTO_ENCRYPT("auto_encrypt"),
    LOCK_SUBFOLDERS("lock_subfolders"),
    STORAGE_REGION("storage_region"),
    SERVE_PUBLICLY("serve_publicly"),
    CREATE_USER_FOLDERS("create_user_folders"),
    REMOTE_SERVER_SYNC("remote_server_sync"),
    INBOX("inbox"),
    APPEND_TIMESTAMP("append_timestamp"),
    LIMIT_FILE_EXTENSIONS("limit_file_extensions"),
    LIMIT_FILE_REGEX("limit_file_regex"),
    AMAZON_SNS("amazon_sns"),
    WATERMARK("watermark"),
    REMOTE_SERVER_MOUNT("remote_server_mount"),
    SLACK_WEBHOOK("slack_webhook");

    public final String value;

    private AppEntityFolderBehaviorTypeEnum(String value) {
        this.value = value;
    }
}
