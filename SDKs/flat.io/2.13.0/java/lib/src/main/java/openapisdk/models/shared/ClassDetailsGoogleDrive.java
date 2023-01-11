package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassDetailsGoogleDrive
 * Google Drive course-related information provided by Google Classroom
**/
public class ClassDetailsGoogleDrive {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teacherFolderAlternateLink")
    public String teacherFolderAlternateLink;
    public ClassDetailsGoogleDrive withTeacherFolderAlternateLink(String teacherFolderAlternateLink) {
        this.teacherFolderAlternateLink = teacherFolderAlternateLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teacherFolderId")
    public String teacherFolderId;
    public ClassDetailsGoogleDrive withTeacherFolderId(String teacherFolderId) {
        this.teacherFolderId = teacherFolderId;
        return this;
    }
}