import { SpeakeasyBase } from "../../../internal/utils";
import { AwsWafv2CustomHttpHeader } from "./awswafv2customhttpheader";
/**
 *  A custom response to send to the client. You can define a custom response for rule actions and default web ACL actions that are set to block.
 */
export declare class AwsWafv2CustomResponseDetails extends SpeakeasyBase {
    customResponseBodyKey?: string;
    responseCode?: number;
    responseHeaders?: AwsWafv2CustomHttpHeader[];
}
