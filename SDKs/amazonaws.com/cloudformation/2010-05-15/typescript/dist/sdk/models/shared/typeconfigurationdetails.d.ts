import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Detailed information concerning the specification of a CloudFormation extension in a given account and region.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
 */
export declare class TypeConfigurationDetails extends SpeakeasyBase {
    alias?: string;
    arn?: string;
    configuration?: string;
    isDefaultConfiguration?: boolean;
    lastUpdated?: Date;
    typeArn?: string;
    typeName?: string;
}
