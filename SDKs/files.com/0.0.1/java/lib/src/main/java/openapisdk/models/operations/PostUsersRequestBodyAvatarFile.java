package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsersRequestBodyAvatarFile {
    @SpeakeasyMetadata("multipartForm:name=avatar_file")
    public String avatarFile;
    public PostUsersRequestBodyAvatarFile withAvatarFile(String avatarFile) {
        this.avatarFile = avatarFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostUsersRequestBodyAvatarFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
}