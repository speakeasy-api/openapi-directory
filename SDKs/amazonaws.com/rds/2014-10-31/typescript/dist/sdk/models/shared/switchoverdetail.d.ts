import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the details about a blue/green deployment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
export declare class SwitchoverDetail extends SpeakeasyBase {
    sourceMember?: string;
    status?: string;
    targetMember?: string;
}
