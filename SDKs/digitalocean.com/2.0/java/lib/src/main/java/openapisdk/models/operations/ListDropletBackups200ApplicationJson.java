package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDropletBackups200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backups")
    public ListDropletBackups200ApplicationJsonBackups[] backups;
    public ListDropletBackups200ApplicationJson withBackups(ListDropletBackups200ApplicationJsonBackups[] backups) {
        this.backups = backups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListDropletBackups200ApplicationJsonLinks links;
    public ListDropletBackups200ApplicationJson withLinks(ListDropletBackups200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListDropletBackups200ApplicationJsonMeta meta;
    public ListDropletBackups200ApplicationJson withMeta(ListDropletBackups200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}