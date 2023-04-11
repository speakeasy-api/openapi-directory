import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the secret managed by RDS in Amazon Web Services Secrets Manager for the master user password.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html">Password management with Amazon Web Services Secrets Manager</a> in the <i>Amazon Aurora User Guide.</i> </p>
 */
export declare class MasterUserSecret extends SpeakeasyBase {
    kmsKeyId?: string;
    secretArn?: string;
    secretStatus?: string;
}
