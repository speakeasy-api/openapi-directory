package openapisdk.models.shared;



/**
 * DoubleRangeList
 * A range of double values.
**/
public class DoubleRangeList {
    public Double from;
    public DoubleRangeList withFrom(Double from) {
        this.from = from;
        return this;
    }
    public Double to;
    public DoubleRangeList withTo(Double to) {
        this.to = to;
        return this;
    }
}