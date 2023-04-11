import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyDescriptorType } from "./policydescriptortype";
import { Tag } from "./tag";
export declare class AssumeRoleRequest extends SpeakeasyBase {
    durationSeconds?: number;
    externalId?: string;
    policy?: string;
    policyArns?: PolicyDescriptorType[];
    roleArn: string;
    roleSessionName: string;
    serialNumber?: string;
    sourceIdentity?: string;
    tags?: Tag[];
    tokenCode?: string;
    transitiveTagKeys?: string[];
}
