package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CollectionCapabilities
 * Capabilities the current user has on this collection. Each capability corresponds to a fine-grained action that a user may take.
**/
public class CollectionCapabilities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canAddScores")
    public Boolean canAddScores;
    public CollectionCapabilities withCanAddScores(Boolean canAddScores) {
        this.canAddScores = canAddScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDelete")
    public Boolean canDelete;
    public CollectionCapabilities withCanDelete(Boolean canDelete) {
        this.canDelete = canDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canDeleteScores")
    public Boolean canDeleteScores;
    public CollectionCapabilities withCanDeleteScores(Boolean canDeleteScores) {
        this.canDeleteScores = canDeleteScores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canEdit")
    public Boolean canEdit;
    public CollectionCapabilities withCanEdit(Boolean canEdit) {
        this.canEdit = canEdit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canShare")
    public Boolean canShare;
    public CollectionCapabilities withCanShare(Boolean canShare) {
        this.canShare = canShare;
        return this;
    }
}