package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Spend
 * <p>The amount of cost or usage that is measured for a budget.</p> <p>For example, a <code>Spend</code> for <code>3 GB</code> of S3 usage would have the following parameters:</p> <ul> <li> <p>An <code>Amount</code> of <code>3</code> </p> </li> <li> <p>A <code>unit</code> of <code>GB</code> </p> </li> </ul>
**/
public class Spend {
    @JsonProperty("Amount")
    public String amount;
    public Spend withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("Unit")
    public String unit;
    public Spend withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}