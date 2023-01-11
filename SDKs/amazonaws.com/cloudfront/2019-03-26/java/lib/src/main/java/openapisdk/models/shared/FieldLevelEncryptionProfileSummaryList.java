package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * FieldLevelEncryptionProfileSummaryList
 * The field-level encryption profile summary.
**/
public class FieldLevelEncryptionProfileSummaryList {
    public String comment;
    public FieldLevelEncryptionProfileSummaryList withComment(String comment) {
        this.comment = comment;
        return this;
    }
    public EncryptionEntities encryptionEntities;
    public FieldLevelEncryptionProfileSummaryList withEncryptionEntities(EncryptionEntities encryptionEntities) {
        this.encryptionEntities = encryptionEntities;
        return this;
    }
    public String id;
    public FieldLevelEncryptionProfileSummaryList withId(String id) {
        this.id = id;
        return this;
    }
    public OffsetDateTime lastModifiedTime;
    public FieldLevelEncryptionProfileSummaryList withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    public String name;
    public FieldLevelEncryptionProfileSummaryList withName(String name) {
        this.name = name;
        return this;
    }
}