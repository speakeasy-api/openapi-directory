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
 * Script
 * <p>Properties describing a Realtime script.</p> <p> <b>Related actions</b> </p> <p> <a>CreateScript</a> | <a>ListScripts</a> | <a>DescribeScript</a> | <a>UpdateScript</a> | <a>DeleteScript</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
public class Script {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public Script withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Script withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScriptArn")
    public String scriptArn;
    public Script withScriptArn(String scriptArn) {
        this.scriptArn = scriptArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScriptId")
    public String scriptId;
    public Script withScriptId(String scriptId) {
        this.scriptId = scriptId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeOnDisk")
    public Long sizeOnDisk;
    public Script withSizeOnDisk(Long sizeOnDisk) {
        this.sizeOnDisk = sizeOnDisk;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageLocation")
    public S3Location storageLocation;
    public Script withStorageLocation(S3Location storageLocation) {
        this.storageLocation = storageLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public Script withVersion(String version) {
        this.version = version;
        return this;
    }
}