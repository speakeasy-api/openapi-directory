import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAccountHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class UpdateAccountUpdateAccountRequestBodyAllowedIpRanges extends SpeakeasyBase {
    ipEnd?: string;
    ipStart?: string;
}
export declare class UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues extends SpeakeasyBase {
    companyName?: string;
    customEmail?: string;
    theme?: string;
}
export declare class UpdateAccountUpdateAccountRequestBodyAccountQuotaValues extends SpeakeasyBase {
    noticeEnabled?: boolean;
    noticeThreshold?: number;
    transactionsNoticeEnabled?: boolean;
    transactionsNoticeThreshold?: number;
}
export declare class UpdateAccountUpdateAccountRequestBody extends SpeakeasyBase {
    accountOnboarding?: boolean;
    allowedIpRanges?: UpdateAccountUpdateAccountRequestBodyAllowedIpRanges[];
    brandingSettings?: UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues;
    complexPasswords?: boolean;
    customSignature?: string;
    emailContent?: string;
    emailSubject?: string;
    externalDomain?: string;
    quota?: UpdateAccountUpdateAccountRequestBodyAccountQuotaValues;
    secureOnly?: boolean;
    showReferralLinks?: boolean;
}
export declare class UpdateAccountRequest extends SpeakeasyBase {
    headers: UpdateAccountHeaders;
    request?: UpdateAccountUpdateAccountRequestBody;
}
export declare class UpdateAccountResponse extends SpeakeasyBase {
    accountResponse?: shared.AccountResponse;
    contentType: string;
    statusCode: number;
}
