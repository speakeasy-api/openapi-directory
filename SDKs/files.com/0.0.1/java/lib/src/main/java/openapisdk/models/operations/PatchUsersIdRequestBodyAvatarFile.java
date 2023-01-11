package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchUsersIdRequestBodyAvatarFile {
    @SpeakeasyMetadata("multipartForm:name=avatar_file")
    public String avatarFile;
    public PatchUsersIdRequestBodyAvatarFile withAvatarFile(String avatarFile) {
        this.avatarFile = avatarFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PatchUsersIdRequestBodyAvatarFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
}