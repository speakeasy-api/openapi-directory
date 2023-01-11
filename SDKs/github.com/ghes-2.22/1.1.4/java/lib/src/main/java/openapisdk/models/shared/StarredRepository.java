package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * StarredRepository
 * Starred Repository
**/
public class StarredRepository {
    @JsonProperty("repo")
    public Repository repo;
    public StarredRepository withRepo(Repository repo) {
        this.repo = repo;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("starred_at")
    public OffsetDateTime starredAt;
    public StarredRepository withStarredAt(OffsetDateTime starredAt) {
        this.starredAt = starredAt;
        return this;
    }
}