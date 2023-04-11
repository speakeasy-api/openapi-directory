import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyDescriptorType } from "./policydescriptortype";
export declare class AssumeRoleWithWebIdentityRequest extends SpeakeasyBase {
    durationSeconds?: number;
    policy?: string;
    policyArns?: PolicyDescriptorType[];
    providerId?: string;
    roleArn: string;
    roleSessionName: string;
    webIdentityToken: string;
}
