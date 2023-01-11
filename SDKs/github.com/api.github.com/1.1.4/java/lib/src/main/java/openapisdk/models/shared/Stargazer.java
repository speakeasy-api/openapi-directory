package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Stargazer
 * Stargazer
**/
public class Stargazer {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("starred_at")
    public OffsetDateTime starredAt;
    public Stargazer withStarredAt(OffsetDateTime starredAt) {
        this.starredAt = starredAt;
        return this;
    }
    @JsonProperty("user")
    public StargazerSimpleUser user;
    public Stargazer withUser(StargazerSimpleUser user) {
        this.user = user;
        return this;
    }
}