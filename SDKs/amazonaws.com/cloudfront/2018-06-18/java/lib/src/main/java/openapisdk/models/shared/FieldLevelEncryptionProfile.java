package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * FieldLevelEncryptionProfile
 * A complex data type for field-level encryption profiles.
**/
public class FieldLevelEncryptionProfile {
    public FieldLevelEncryptionProfileConfig fieldLevelEncryptionProfileConfig;
    public FieldLevelEncryptionProfile withFieldLevelEncryptionProfileConfig(FieldLevelEncryptionProfileConfig fieldLevelEncryptionProfileConfig) {
        this.fieldLevelEncryptionProfileConfig = fieldLevelEncryptionProfileConfig;
        return this;
    }
    public String id;
    public FieldLevelEncryptionProfile withId(String id) {
        this.id = id;
        return this;
    }
    public OffsetDateTime lastModifiedTime;
    public FieldLevelEncryptionProfile withLastModifiedTime(OffsetDateTime lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
}