package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateRdsDbInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbPassword")
    public String dbPassword;
    public UpdateRdsDbInstanceRequest withDbPassword(String dbPassword) {
        this.dbPassword = dbPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DbUser")
    public String dbUser;
    public UpdateRdsDbInstanceRequest withDbUser(String dbUser) {
        this.dbUser = dbUser;
        return this;
    }
    @JsonProperty("RdsDbInstanceArn")
    public String rdsDbInstanceArn;
    public UpdateRdsDbInstanceRequest withRdsDbInstanceArn(String rdsDbInstanceArn) {
        this.rdsDbInstanceArn = rdsDbInstanceArn;
        return this;
    }
}