package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Serializer
 * The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>.
**/
public class Serializer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrcSerDe")
    public OrcSerDe orcSerDe;
    public Serializer withOrcSerDe(OrcSerDe orcSerDe) {
        this.orcSerDe = orcSerDe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParquetSerDe")
    public ParquetSerDe parquetSerDe;
    public Serializer withParquetSerDe(ParquetSerDe parquetSerDe) {
        this.parquetSerDe = parquetSerDe;
        return this;
    }
}