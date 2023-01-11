package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BlacklistEntry
 * An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account.
**/
public class BlacklistEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public BlacklistEntry withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ListingTime")
    public OffsetDateTime listingTime;
    public BlacklistEntry withListingTime(OffsetDateTime listingTime) {
        this.listingTime = listingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RblName")
    public String rblName;
    public BlacklistEntry withRblName(String rblName) {
        this.rblName = rblName;
        return this;
    }
}