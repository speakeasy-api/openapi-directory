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
 * Fragment
 * Represents a segment of video or other time-delimited data.
**/
public class Fragment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FragmentLengthInMilliseconds")
    public Long fragmentLengthInMilliseconds;
    public Fragment withFragmentLengthInMilliseconds(Long fragmentLengthInMilliseconds) {
        this.fragmentLengthInMilliseconds = fragmentLengthInMilliseconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FragmentNumber")
    public String fragmentNumber;
    public Fragment withFragmentNumber(String fragmentNumber) {
        this.fragmentNumber = fragmentNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FragmentSizeInBytes")
    public Long fragmentSizeInBytes;
    public Fragment withFragmentSizeInBytes(Long fragmentSizeInBytes) {
        this.fragmentSizeInBytes = fragmentSizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ProducerTimestamp")
    public OffsetDateTime producerTimestamp;
    public Fragment withProducerTimestamp(OffsetDateTime producerTimestamp) {
        this.producerTimestamp = producerTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ServerTimestamp")
    public OffsetDateTime serverTimestamp;
    public Fragment withServerTimestamp(OffsetDateTime serverTimestamp) {
        this.serverTimestamp = serverTimestamp;
        return this;
    }
}