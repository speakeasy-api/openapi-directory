package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BoardPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("can_add_assets")
    public Boolean canAddAssets;
    public BoardPermissions withCanAddAssets(Boolean canAddAssets) {
        this.canAddAssets = canAddAssets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("can_delete_board")
    public Boolean canDeleteBoard;
    public BoardPermissions withCanDeleteBoard(Boolean canDeleteBoard) {
        this.canDeleteBoard = canDeleteBoard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("can_invite_to_board")
    public Boolean canInviteToBoard;
    public BoardPermissions withCanInviteToBoard(Boolean canInviteToBoard) {
        this.canInviteToBoard = canInviteToBoard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("can_remove_assets")
    public Boolean canRemoveAssets;
    public BoardPermissions withCanRemoveAssets(Boolean canRemoveAssets) {
        this.canRemoveAssets = canRemoveAssets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("can_update_description")
    public Boolean canUpdateDescription;
    public BoardPermissions withCanUpdateDescription(Boolean canUpdateDescription) {
        this.canUpdateDescription = canUpdateDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("can_update_name")
    public Boolean canUpdateName;
    public BoardPermissions withCanUpdateName(Boolean canUpdateName) {
        this.canUpdateName = canUpdateName;
        return this;
    }
}