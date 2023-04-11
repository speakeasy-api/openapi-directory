import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPciUrlRequest extends SpeakeasyBase {
    /**
     * The account holder code you provided when you created the account holder.
     */
    accountHolderCode: string;
    /**
     * The URL where the account holder will be redirected back to after they fill out the questionnaire, or if their session times out. Maximum length of 500 characters.
     */
    returnUrl?: string;
}
