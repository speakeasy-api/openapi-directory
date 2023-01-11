package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3DataSpec
 *  Describes the data specification of a <code>DataSource</code>.
**/
public class S3DataSpec {
    @JsonProperty("DataLocationS3")
    public String dataLocationS3;
    public S3DataSpec withDataLocationS3(String dataLocationS3) {
        this.dataLocationS3 = dataLocationS3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataRearrangement")
    public String dataRearrangement;
    public S3DataSpec withDataRearrangement(String dataRearrangement) {
        this.dataRearrangement = dataRearrangement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSchema")
    public String dataSchema;
    public S3DataSpec withDataSchema(String dataSchema) {
        this.dataSchema = dataSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSchemaLocationS3")
    public String dataSchemaLocationS3;
    public S3DataSpec withDataSchemaLocationS3(String dataSchemaLocationS3) {
        this.dataSchemaLocationS3 = dataSchemaLocationS3;
        return this;
    }
}