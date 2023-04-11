import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyDescriptorType } from "./policydescriptortype";
export declare class AssumeRoleWithSAMLRequest extends SpeakeasyBase {
    durationSeconds?: number;
    policy?: string;
    policyArns?: PolicyDescriptorType[];
    principalArn: string;
    roleArn: string;
    samlAssertion: string;
}
