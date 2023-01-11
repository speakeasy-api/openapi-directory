package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * PublicKeySummaryList
 *  Public key information summary. 
**/
public class PublicKeySummaryList {
    public String comment;
    public PublicKeySummaryList withComment(String comment) {
        this.comment = comment;
        return this;
    }
    public OffsetDateTime createdTime;
    public PublicKeySummaryList withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    public String encodedKey;
    public PublicKeySummaryList withEncodedKey(String encodedKey) {
        this.encodedKey = encodedKey;
        return this;
    }
    public String id;
    public PublicKeySummaryList withId(String id) {
        this.id = id;
        return this;
    }
    public String name;
    public PublicKeySummaryList withName(String name) {
        this.name = name;
        return this;
    }
}