package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGroupsGroupIdUsersRequestBodyAvatarFile {
    @SpeakeasyMetadata("multipartForm:name=avatar_file")
    public String avatarFile;
    public PostGroupsGroupIdUsersRequestBodyAvatarFile withAvatarFile(String avatarFile) {
        this.avatarFile = avatarFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostGroupsGroupIdUsersRequestBodyAvatarFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
}