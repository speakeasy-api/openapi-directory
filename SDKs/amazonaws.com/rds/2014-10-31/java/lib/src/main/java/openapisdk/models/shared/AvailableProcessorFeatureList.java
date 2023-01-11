package openapisdk.models.shared;



/**
 * AvailableProcessorFeatureList
 * <p>Contains the available processor feature information for the DB instance class of a DB instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide. </i> </p>
**/
public class AvailableProcessorFeatureList {
    public String allowedValues;
    public AvailableProcessorFeatureList withAllowedValues(String allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    public String defaultValue;
    public AvailableProcessorFeatureList withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    public String name;
    public AvailableProcessorFeatureList withName(String name) {
        this.name = name;
        return this;
    }
}