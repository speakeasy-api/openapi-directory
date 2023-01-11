package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DatabaseCreateCollectionRequestBody {
    @JsonProperty("name")
    public String name;
    public DatabaseCreateCollectionRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("read")
    public String[] read;
    public DatabaseCreateCollectionRequestBody withRead(String[] read) {
        this.read = read;
        return this;
    }
    @JsonProperty("rules")
    public String[] rules;
    public DatabaseCreateCollectionRequestBody withRules(String[] rules) {
        this.rules = rules;
        return this;
    }
    @JsonProperty("write")
    public String[] write;
    public DatabaseCreateCollectionRequestBody withWrite(String[] write) {
        this.write = write;
        return this;
    }
}