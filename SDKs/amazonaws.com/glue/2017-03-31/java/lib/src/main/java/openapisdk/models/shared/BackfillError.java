package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackfillError
 * <p>A list of errors that can occur when registering partition indexes for an existing table.</p> <p>These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:</p> <ul> <li> <p>EncryptedPartitionError: The partitions are encrypted.</p> </li> <li> <p>InvalidPartitionTypeDataError: The partition value doesn't match the data type for that partition column.</p> </li> <li> <p>MissingPartitionValueError: The partitions are encrypted.</p> </li> <li> <p>UnsupportedPartitionCharacterError: Characters inside the partition value are not supported. For example: U+0000 , U+0001, U+0002.</p> </li> <li> <p>InternalError: Any error which does not belong to other error codes.</p> </li> </ul>
**/
public class BackfillError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public BackfillErrorCodeEnum code;
    public BackfillError withCode(BackfillErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Partitions")
    public PartitionValueList[] partitions;
    public BackfillError withPartitions(PartitionValueList[] partitions) {
        this.partitions = partitions;
        return this;
    }
}