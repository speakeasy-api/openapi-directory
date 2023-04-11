import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformDifferenceEnum } from "./platformdifferenceenum";
import { ResourceDetails } from "./resourcedetails";
import { ResourceUtilization } from "./resourceutilization";
/**
 * Details on recommended instance.
 */
export declare class TargetInstance extends SpeakeasyBase {
    currencyCode?: string;
    defaultTargetInstance?: boolean;
    estimatedMonthlyCost?: string;
    estimatedMonthlySavings?: string;
    expectedResourceUtilization?: ResourceUtilization;
    platformDifferences?: PlatformDifferenceEnum[];
    resourceDetails?: ResourceDetails;
}
