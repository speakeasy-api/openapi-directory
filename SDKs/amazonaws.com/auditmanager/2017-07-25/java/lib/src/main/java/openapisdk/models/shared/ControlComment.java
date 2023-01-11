package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ControlComment
 *  A comment posted by a user on a control. This includes the author's name, the comment text, and a timestamp. 
**/
public class ControlComment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorName")
    public String authorName;
    public ControlComment withAuthorName(String authorName) {
        this.authorName = authorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commentBody")
    public String commentBody;
    public ControlComment withCommentBody(String commentBody) {
        this.commentBody = commentBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("postedDate")
    public OffsetDateTime postedDate;
    public ControlComment withPostedDate(OffsetDateTime postedDate) {
        this.postedDate = postedDate;
        return this;
    }
}