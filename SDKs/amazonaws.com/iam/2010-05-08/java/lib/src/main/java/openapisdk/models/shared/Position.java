package openapisdk.models.shared;



/**
 * Position
 * <p>Contains the row and column of a location of a <code>Statement</code> element in a policy document.</p> <p>This data type is used as a member of the <code> <a>Statement</a> </code> type.</p>
**/
public class Position {
    public Long column;
    public Position withColumn(Long column) {
        this.column = column;
        return this;
    }
    public Long line;
    public Position withLine(Long line) {
        this.line = line;
        return this;
    }
}