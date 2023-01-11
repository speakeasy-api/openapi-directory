package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GitCommitAuthor
 * Identifying information for the git-user
**/
public class GitCommitAuthor {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public GitCommitAuthor withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public GitCommitAuthor withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GitCommitAuthor withName(String name) {
        this.name = name;
        return this;
    }
}