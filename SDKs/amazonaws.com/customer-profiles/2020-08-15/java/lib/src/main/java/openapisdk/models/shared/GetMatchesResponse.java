package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetMatchesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("MatchGenerationDate")
    public OffsetDateTime matchGenerationDate;
    public GetMatchesResponse withMatchGenerationDate(OffsetDateTime matchGenerationDate) {
        this.matchGenerationDate = matchGenerationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Matches")
    public MatchItem[] matches;
    public GetMatchesResponse withMatches(MatchItem[] matches) {
        this.matches = matches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetMatchesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PotentialMatches")
    public Long potentialMatches;
    public GetMatchesResponse withPotentialMatches(Long potentialMatches) {
        this.potentialMatches = potentialMatches;
        return this;
    }
}