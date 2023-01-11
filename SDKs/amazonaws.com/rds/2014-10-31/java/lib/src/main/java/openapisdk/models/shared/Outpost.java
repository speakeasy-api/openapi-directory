package openapisdk.models.shared;



/**
 * Outpost
 * <p>A data type that represents an Outpost.</p> <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Amazon RDS on Amazon Web Services Outposts</a> in the <i>Amazon RDS User Guide.</i> </p>
**/
public class Outpost {
    public String arn;
    public Outpost withArn(String arn) {
        this.arn = arn;
        return this;
    }
}