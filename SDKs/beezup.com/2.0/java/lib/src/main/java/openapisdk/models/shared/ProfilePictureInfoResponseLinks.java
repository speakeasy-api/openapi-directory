package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProfilePictureInfoResponseLinks {
    @JsonProperty("save")
    public LinksSaveProfilePictureInfoLink save;
    public ProfilePictureInfoResponseLinks withSave(LinksSaveProfilePictureInfoLink save) {
        this.save = save;
        return this;
    }
    @JsonProperty("self")
    public LinksGetProfilePictureInfoLink self;
    public ProfilePictureInfoResponseLinks withSelf(LinksGetProfilePictureInfoLink self) {
        this.self = self;
        return this;
    }
}