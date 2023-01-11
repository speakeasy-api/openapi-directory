package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListVolumeSnapshots200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public ListVolumeSnapshots200ApplicationJsonLinks links;
    public ListVolumeSnapshots200ApplicationJson withLinks(ListVolumeSnapshots200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("meta")
    public ListVolumeSnapshots200ApplicationJsonMeta meta;
    public ListVolumeSnapshots200ApplicationJson withMeta(ListVolumeSnapshots200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snapshots")
    public openapisdk.models.shared.Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[] snapshots;
    public ListVolumeSnapshots200ApplicationJson withSnapshots(openapisdk.models.shared.Onev21snapshotsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSnapshotsItems[] snapshots) {
        this.snapshots = snapshots;
        return this;
    }
}