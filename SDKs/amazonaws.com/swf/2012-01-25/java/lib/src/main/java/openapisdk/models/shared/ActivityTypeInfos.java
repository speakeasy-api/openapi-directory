package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityTypeInfos
 * Contains a paginated list of activity type information structures.
**/
public class ActivityTypeInfos {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ActivityTypeInfos withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonProperty("typeInfos")
    public ActivityTypeInfo[] typeInfos;
    public ActivityTypeInfos withTypeInfos(ActivityTypeInfo[] typeInfos) {
        this.typeInfos = typeInfos;
        return this;
    }
}