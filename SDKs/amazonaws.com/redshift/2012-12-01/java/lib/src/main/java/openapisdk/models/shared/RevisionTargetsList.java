package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * RevisionTargetsList
 * Describes a <code>RevisionTarget</code>.
**/
public class RevisionTargetsList {
    public String databaseRevision;
    public RevisionTargetsList withDatabaseRevision(String databaseRevision) {
        this.databaseRevision = databaseRevision;
        return this;
    }
    public OffsetDateTime databaseRevisionReleaseDate;
    public RevisionTargetsList withDatabaseRevisionReleaseDate(OffsetDateTime databaseRevisionReleaseDate) {
        this.databaseRevisionReleaseDate = databaseRevisionReleaseDate;
        return this;
    }
    public String description;
    public RevisionTargetsList withDescription(String description) {
        this.description = description;
        return this;
    }
}