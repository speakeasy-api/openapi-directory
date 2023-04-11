import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiCoreDtoAccountingUser extends SpeakeasyBase {
    boGoVal?: string;
    bonusClicks?: number;
    companyName?: string;
    companyRole?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
    redirectOnly?: boolean;
    /**
     *  (A date in "YmdHis" format)
     */
    registrationDate?: string;
    /**
     *  (A date in "YmdHis" format)
     */
    timeframeMinDate?: string;
    timezone?: number;
    timezonename?: string;
}
