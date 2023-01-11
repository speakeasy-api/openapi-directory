package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUserRequestBodyAvatarFile {
    @SpeakeasyMetadata("multipartForm:name=avatar_file")
    public String avatarFile;
    public PatchUserRequestBodyAvatarFile withAvatarFile(String avatarFile) {
        this.avatarFile = avatarFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PatchUserRequestBodyAvatarFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
}