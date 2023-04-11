import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1DonationsCreateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * Source of the donation funds. If you are collecting payment from your customer for the donation, use `customer`.
 */
export declare enum PostApiV1DonationsCreateFundingSourceEnum {
    Merchant = "merchant",
    Customer = "customer"
}
export declare class PostApiV1DonationsCreateRequest extends SpeakeasyBase {
    /**
     * The amount of the donation in cents.
     */
    amount: string;
    /**
     * Source of the donation funds. If you are collecting payment from your customer for the donation, use `customer`.
     */
    fundingSource: PostApiV1DonationsCreateFundingSourceEnum;
    /**
     * The id of a nonprofit from the CHANGE network.
     */
    nonprofitId: string;
    /**
     * The customer's zip code. Provide this to unlock geographic insights.
     */
    zipCode?: string;
}
export declare class PostApiV1DonationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
