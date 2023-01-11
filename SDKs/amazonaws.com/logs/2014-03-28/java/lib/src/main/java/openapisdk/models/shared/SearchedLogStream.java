package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchedLogStream
 * Represents the search status of a log stream.
**/
public class SearchedLogStream {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logStreamName")
    public String logStreamName;
    public SearchedLogStream withLogStreamName(String logStreamName) {
        this.logStreamName = logStreamName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searchedCompletely")
    public Boolean searchedCompletely;
    public SearchedLogStream withSearchedCompletely(Boolean searchedCompletely) {
        this.searchedCompletely = searchedCompletely;
        return this;
    }
}