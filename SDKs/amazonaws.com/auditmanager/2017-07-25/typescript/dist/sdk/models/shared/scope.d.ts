import { SpeakeasyBase } from "../../../internal/utils";
import { AWSAccount } from "./awsaccount";
import { AWSService } from "./awsservice";
/**
 *  The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment.
 */
export declare class Scope extends SpeakeasyBase {
    awsAccounts?: AWSAccount[];
    awsServices?: AWSService[];
}
