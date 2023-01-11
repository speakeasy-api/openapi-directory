package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GetMediaRequestBodyStartSelector
 * <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>
**/
public class GetMediaRequestBodyStartSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AfterFragmentNumber")
    public String afterFragmentNumber;
    public GetMediaRequestBodyStartSelector withAfterFragmentNumber(String afterFragmentNumber) {
        this.afterFragmentNumber = afterFragmentNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContinuationToken")
    public String continuationToken;
    public GetMediaRequestBodyStartSelector withContinuationToken(String continuationToken) {
        this.continuationToken = continuationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartSelectorType")
    public openapisdk.models.shared.StartSelectorTypeEnum startSelectorType;
    public GetMediaRequestBodyStartSelector withStartSelectorType(openapisdk.models.shared.StartSelectorTypeEnum startSelectorType) {
        this.startSelectorType = startSelectorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartTimestamp")
    public OffsetDateTime startTimestamp;
    public GetMediaRequestBodyStartSelector withStartTimestamp(OffsetDateTime startTimestamp) {
        this.startTimestamp = startTimestamp;
        return this;
    }
}