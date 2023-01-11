package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllSnapshots200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllSnapshots200ApplicationJsonLinks links;
    public ListAllSnapshots200ApplicationJson withLinks(ListAllSnapshots200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllSnapshots200ApplicationJsonMeta meta;
    public ListAllSnapshots200ApplicationJson withMeta(ListAllSnapshots200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshots")
    public ListAllSnapshots200ApplicationJsonSnapshots[] snapshots;
    public ListAllSnapshots200ApplicationJson withSnapshots(ListAllSnapshots200ApplicationJsonSnapshots[] snapshots) {
        this.snapshots = snapshots;
        return this;
    }
}