import { SpeakeasyBase } from "../../../internal/utils";
import { RemediationException } from "./remediationexception";
/**
 * Success
 */
export declare class DescribeRemediationExceptionsResponse extends SpeakeasyBase {
    nextToken?: string;
    remediationExceptions?: RemediationException[];
}
