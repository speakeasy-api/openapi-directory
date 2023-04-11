import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configured table association links a configured table to a collaboration.
 */
export declare class ConfiguredTableAssociation extends SpeakeasyBase {
    arn: string;
    configuredTableArn: string;
    configuredTableId: string;
    createTime: Date;
    description?: string;
    id: string;
    membershipArn: string;
    membershipId: string;
    name: string;
    roleArn: string;
    updateTime: Date;
}
