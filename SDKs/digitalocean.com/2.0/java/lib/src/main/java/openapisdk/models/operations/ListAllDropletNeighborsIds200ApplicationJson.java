package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllDropletNeighborsIds200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("neighbor_ids")
    public Long[][] neighborIds;
    public ListAllDropletNeighborsIds200ApplicationJson withNeighborIds(Long[][] neighborIds) {
        this.neighborIds = neighborIds;
        return this;
    }
}