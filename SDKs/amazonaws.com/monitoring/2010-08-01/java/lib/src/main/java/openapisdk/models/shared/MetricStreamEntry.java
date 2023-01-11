package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * MetricStreamEntry
 * This structure contains the configuration information about one metric stream.
**/
public class MetricStreamEntry {
    public String arn;
    public MetricStreamEntry withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public OffsetDateTime creationDate;
    public MetricStreamEntry withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public String firehoseArn;
    public MetricStreamEntry withFirehoseArn(String firehoseArn) {
        this.firehoseArn = firehoseArn;
        return this;
    }
    public OffsetDateTime lastUpdateDate;
    public MetricStreamEntry withLastUpdateDate(OffsetDateTime lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
        return this;
    }
    public String name;
    public MetricStreamEntry withName(String name) {
        this.name = name;
        return this;
    }
    public MetricStreamOutputFormatEnum outputFormat;
    public MetricStreamEntry withOutputFormat(MetricStreamOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    public String state;
    public MetricStreamEntry withState(String state) {
        this.state = state;
        return this;
    }
}