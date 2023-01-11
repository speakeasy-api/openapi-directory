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
 * MitigationActionIdentifier
 * Information that identifies a mitigation action. This information is returned by ListMitigationActions.
**/
public class MitigationActionIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionArn")
    public String actionArn;
    public MitigationActionIdentifier withActionArn(String actionArn) {
        this.actionArn = actionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionName")
    public String actionName;
    public MitigationActionIdentifier withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public MitigationActionIdentifier withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
}