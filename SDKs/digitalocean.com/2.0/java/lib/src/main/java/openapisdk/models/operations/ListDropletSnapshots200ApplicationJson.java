package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDropletSnapshots200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListDropletSnapshots200ApplicationJsonLinks links;
    public ListDropletSnapshots200ApplicationJson withLinks(ListDropletSnapshots200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListDropletSnapshots200ApplicationJsonMeta meta;
    public ListDropletSnapshots200ApplicationJson withMeta(ListDropletSnapshots200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshots")
    public openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems[] snapshots;
    public ListDropletSnapshots200ApplicationJson withSnapshots(openapisdk.models.shared.Onev21droplets1Percent7BdropletIdPercent7D1backupsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesBackupsItems[] snapshots) {
        this.snapshots = snapshots;
        return this;
    }
}