import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDetails } from "./resourcedetails";
import { ResourceUtilization } from "./resourceutilization";
import { TagValues } from "./tagvalues";
/**
 * Context about the current instance.
 */
export declare class CurrentInstance extends SpeakeasyBase {
    currencyCode?: string;
    instanceName?: string;
    monthlyCost?: string;
    onDemandHoursInLookbackPeriod?: string;
    reservationCoveredHoursInLookbackPeriod?: string;
    resourceDetails?: ResourceDetails;
    resourceId?: string;
    resourceUtilization?: ResourceUtilization;
    savingsPlansCoveredHoursInLookbackPeriod?: string;
    tags?: TagValues[];
    totalRunningHoursInLookbackPeriod?: string;
}
