import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents which scan types are automatically enabled for new members of your Amazon Inspector organization.
 */
export declare class AutoEnable extends SpeakeasyBase {
    ec2: boolean;
    ecr: boolean;
    lambda?: boolean;
}
