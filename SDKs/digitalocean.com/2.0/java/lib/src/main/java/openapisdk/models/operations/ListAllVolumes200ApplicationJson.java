package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllVolumes200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListAllVolumes200ApplicationJsonLinks links;
    public ListAllVolumes200ApplicationJson withLinks(ListAllVolumes200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListAllVolumes200ApplicationJsonMeta meta;
    public ListAllVolumes200ApplicationJson withMeta(ListAllVolumes200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("volumes")
    public ListAllVolumes200ApplicationJsonVolumes[] volumes;
    public ListAllVolumes200ApplicationJson withVolumes(ListAllVolumes200ApplicationJsonVolumes[] volumes) {
        this.volumes = volumes;
        return this;
    }
}