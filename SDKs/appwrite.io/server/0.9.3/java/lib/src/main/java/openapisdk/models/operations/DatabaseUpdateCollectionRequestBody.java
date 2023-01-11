package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DatabaseUpdateCollectionRequestBody {
    @JsonProperty("name")
    public String name;
    public DatabaseUpdateCollectionRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public String[] read;
    public DatabaseUpdateCollectionRequestBody withRead(String[] read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rules")
    public String[] rules;
    public DatabaseUpdateCollectionRequestBody withRules(String[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("write")
    public String[] write;
    public DatabaseUpdateCollectionRequestBody withWrite(String[] write) {
        this.write = write;
        return this;
    }
}