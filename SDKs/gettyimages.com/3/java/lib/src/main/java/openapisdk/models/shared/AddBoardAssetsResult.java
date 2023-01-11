package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddBoardAssetsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets_added")
    public BoardAsset[] assetsAdded;
    public AddBoardAssetsResult withAssetsAdded(BoardAsset[] assetsAdded) {
        this.assetsAdded = assetsAdded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assets_not_added")
    public String[] assetsNotAdded;
    public AddBoardAssetsResult withAssetsNotAdded(String[] assetsNotAdded) {
        this.assetsNotAdded = assetsNotAdded;
        return this;
    }
}