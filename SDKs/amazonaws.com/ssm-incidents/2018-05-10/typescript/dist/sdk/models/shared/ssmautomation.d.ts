import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicSsmParameterValue } from "./dynamicssmparametervalue";
import { SsmTargetAccountEnum } from "./ssmtargetaccountenum";
/**
 * Details about the Systems Manager automation document that will be used as a runbook during an incident.
 */
export declare class SsmAutomation extends SpeakeasyBase {
    documentName: string;
    documentVersion?: string;
    dynamicParameters?: Record<string, DynamicSsmParameterValue>;
    parameters?: Record<string, string[]>;
    roleArn: string;
    targetAccount?: SsmTargetAccountEnum;
}
