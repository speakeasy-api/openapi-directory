import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRequestBodyGroupsEnum {
    Tax = "tax",
    WealthManagement = "wealth management",
    Social = "social",
    SocialManager = "social manager",
    Purchases = "purchases",
    Sales = "sales",
    Legal = "legal",
    Accounting = "accounting"
}
export declare enum PatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRequestBodyRoleEnum {
    Collaborator = "collaborator",
    Assistant = "assistant",
    Empty = "empty"
}
/**
 * Portfolio to modify
 */
export declare class PatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRequestBody extends SpeakeasyBase {
    apply?: boolean;
    groups?: PatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRequestBodyGroupsEnum;
    isAdmin?: boolean;
    role?: PatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRequestBodyRoleEnum;
}
export declare class PatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRequest extends SpeakeasyBase {
    /**
     * Portfolio to modify
     */
    requestBody: PatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdRequestBody;
    /**
     * Id of the space
     */
    id: string;
    /**
     * memberId of the person
     */
    memberId: string;
    /**
     * id of the portfolio
     */
    portfolioId: string;
}
export declare class PatchSpacesIdPortfoliosPortfolioIdPersonsMemberIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
