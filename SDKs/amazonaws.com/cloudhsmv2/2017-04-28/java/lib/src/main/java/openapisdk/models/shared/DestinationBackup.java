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
 * DestinationBackup
 * Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation.
**/
public class DestinationBackup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTimestamp")
    public OffsetDateTime createTimestamp;
    public DestinationBackup withCreateTimestamp(OffsetDateTime createTimestamp) {
        this.createTimestamp = createTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceBackup")
    public String sourceBackup;
    public DestinationBackup withSourceBackup(String sourceBackup) {
        this.sourceBackup = sourceBackup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceCluster")
    public String sourceCluster;
    public DestinationBackup withSourceCluster(String sourceCluster) {
        this.sourceCluster = sourceCluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceRegion")
    public String sourceRegion;
    public DestinationBackup withSourceRegion(String sourceRegion) {
        this.sourceRegion = sourceRegion;
        return this;
    }
}