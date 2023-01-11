package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PatchFilesPathRequestBody {
    @SpeakeasyMetadata("multipartForm:name=priority_color")
    public String priorityColor;
    public PatchFilesPathRequestBody withPriorityColor(String priorityColor) {
        this.priorityColor = priorityColor;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=provided_mtime")
    public OffsetDateTime providedMtime;
    public PatchFilesPathRequestBody withProvidedMtime(OffsetDateTime providedMtime) {
        this.providedMtime = providedMtime;
        return this;
    }
}