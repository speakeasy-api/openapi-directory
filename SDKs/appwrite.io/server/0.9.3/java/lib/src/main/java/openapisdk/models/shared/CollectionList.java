package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CollectionList
 * Collections List
**/
public class CollectionList {
    @JsonProperty("collections")
    public Collection[] collections;
    public CollectionList withCollections(Collection[] collections) {
        this.collections = collections;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public CollectionList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}