package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Location
 * The location of resources.
**/
public class Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DynamoDB")
    public CodeGenNodeArg[] dynamoDB;
    public Location withDynamoDb(CodeGenNodeArg[] dynamoDB) {
        this.dynamoDB = dynamoDB;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Jdbc")
    public CodeGenNodeArg[] jdbc;
    public Location withJdbc(CodeGenNodeArg[] jdbc) {
        this.jdbc = jdbc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3")
    public CodeGenNodeArg[] s3;
    public Location withS3(CodeGenNodeArg[] s3) {
        this.s3 = s3;
        return this;
    }
}