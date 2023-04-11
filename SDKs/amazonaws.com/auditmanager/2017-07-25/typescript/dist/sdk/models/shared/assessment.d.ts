import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentFramework } from "./assessmentframework";
import { AssessmentMetadata } from "./assessmentmetadata";
import { AWSAccount } from "./awsaccount";
/**
 *  An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.
 */
export declare class Assessment extends SpeakeasyBase {
    arn?: string;
    awsAccount?: AWSAccount;
    framework?: AssessmentFramework;
    metadata?: AssessmentMetadata;
    tags?: Record<string, string>;
}
