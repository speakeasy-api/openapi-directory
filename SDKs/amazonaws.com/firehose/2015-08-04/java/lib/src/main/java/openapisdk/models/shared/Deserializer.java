package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Deserializer
 * The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>.
**/
public class Deserializer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HiveJsonSerDe")
    public HiveJsonSerDe hiveJsonSerDe;
    public Deserializer withHiveJsonSerDe(HiveJsonSerDe hiveJsonSerDe) {
        this.hiveJsonSerDe = hiveJsonSerDe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenXJsonSerDe")
    public OpenXJsonSerDe openXJsonSerDe;
    public Deserializer withOpenXJsonSerDe(OpenXJsonSerDe openXJsonSerDe) {
        this.openXJsonSerDe = openXJsonSerDe;
        return this;
    }
}