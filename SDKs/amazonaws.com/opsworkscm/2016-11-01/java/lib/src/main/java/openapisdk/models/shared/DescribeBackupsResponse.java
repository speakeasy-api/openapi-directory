package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeBackupsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Backups")
    public Backup[] backups;
    public DescribeBackupsResponse withBackups(Backup[] backups) {
        this.backups = backups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeBackupsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}