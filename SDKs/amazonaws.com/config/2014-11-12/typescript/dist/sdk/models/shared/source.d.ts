import { SpeakeasyBase } from "../../../internal/utils";
import { CustomPolicyDetails } from "./custompolicydetails";
import { OwnerEnum } from "./ownerenum";
import { SourceDetail } from "./sourcedetail";
/**
 * Provides the CustomPolicyDetails, the rule owner (<code>Amazon Web Services</code> for managed rules, <code>CUSTOM_POLICY</code> for Custom Policy rules, and <code>CUSTOM_LAMBDA</code> for Custom Lambda rules), the rule identifier, and the events that cause the evaluation of your Amazon Web Services resources.
 */
export declare class Source extends SpeakeasyBase {
    customPolicyDetails?: CustomPolicyDetails;
    owner: OwnerEnum;
    sourceDetails?: SourceDetail[];
    sourceIdentifier?: string;
}
