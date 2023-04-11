import { SpeakeasyBase } from "../../../internal/utils";
export declare class FundingInformation extends SpeakeasyBase {
    /**
     * Funder's name
     */
    funderName: string;
    /**
     * The grant code
     */
    grantCode: string;
    /**
     * Funding id
     */
    id: number;
    /**
     * Return whether the grant has been introduced manually
     */
    isUserDefined: boolean;
    /**
     * The funding name
     */
    title: string;
    /**
     * The grant url
     */
    url: string;
}
