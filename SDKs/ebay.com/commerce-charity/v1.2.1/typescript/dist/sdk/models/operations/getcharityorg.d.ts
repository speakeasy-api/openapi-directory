import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCharityOrgSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetCharityOrgRequest extends SpeakeasyBase {
    /**
     * A header used to specify the eBay marketplace ID.<br /><br /><b>Valid Values:</b> <code>EBAY_GB</code> and <code>EBAY_US</code>
     */
    xEbayCMarketplaceId: string;
    /**
     * The unique ID of the charitable organization.
     */
    charityOrgId: string;
}
export declare class GetCharityOrgResponse extends SpeakeasyBase {
    /**
     * OK
     */
    charityOrg?: shared.CharityOrg;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
