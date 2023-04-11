import { SpeakeasyBase } from "../../../internal/utils";
import { StandardsProfile } from "./standardsprofile";
/**
 * The response container for a list of seller profiles.
 */
export declare class FindSellerStandardsProfilesResponse extends SpeakeasyBase {
    /**
     * A list of the seller's standards profiles. A &quot;standards profile&quot; is a set of eBay seller standards categories and the values related to the associated seller. Profiles are distinguished by a combination of cycle and program values. The &quot;program&quot; value specifies the region to which the data is from. The &quot;cycle&quot; value specifies whether the values were determined just now, or if the values are from the last official eBay seller standards evaluation.
     */
    standardsProfiles?: StandardsProfile[];
}
