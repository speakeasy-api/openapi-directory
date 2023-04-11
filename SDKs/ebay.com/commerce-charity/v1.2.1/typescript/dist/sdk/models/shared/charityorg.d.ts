import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { Location } from "./location";
/**
 * The full location, ID, logo and other details of the charity organization.
 */
export declare class CharityOrg extends SpeakeasyBase {
    /**
     * The ID of the charitable organization.
     */
    charityOrgId?: string;
    /**
     * The description of the charitable organization.
     */
    description?: string;
    location?: Location;
    /**
     * The logo of the charitable organization.
     */
    logoImage?: Image;
    /**
     * The mission statement of the charitable organization.
     */
    missionStatement?: string;
    /**
     * The name of the charitable organization.
     */
    name?: string;
    /**
     * The registration ID for the charitable organization.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> For the US marketplace, this is the EIN.</span>
     */
    registrationId?: string;
    /**
     * The link to the website for the charitable organization.
     */
    website?: string;
}
