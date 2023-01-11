package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListStreamsOutput
 * Represents the output for <code>ListStreams</code>.
**/
public class ListStreamsOutput {
    @JsonProperty("HasMoreStreams")
    public Boolean hasMoreStreams;
    public ListStreamsOutput withHasMoreStreams(Boolean hasMoreStreams) {
        this.hasMoreStreams = hasMoreStreams;
        return this;
    }
    @JsonProperty("StreamNames")
    public String[] streamNames;
    public ListStreamsOutput withStreamNames(String[] streamNames) {
        this.streamNames = streamNames;
        return this;
    }
}