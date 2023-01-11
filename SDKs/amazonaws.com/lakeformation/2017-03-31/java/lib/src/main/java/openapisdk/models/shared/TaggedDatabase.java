package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaggedDatabase
 * A structure describing a database resource with tags.
**/
public class TaggedDatabase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Database")
    public DatabaseResource database;
    public TaggedDatabase withDatabase(DatabaseResource database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LFTags")
    public LfTagPair[] lfTags;
    public TaggedDatabase withLfTags(LfTagPair[] lfTags) {
        this.lfTags = lfTags;
        return this;
    }
}