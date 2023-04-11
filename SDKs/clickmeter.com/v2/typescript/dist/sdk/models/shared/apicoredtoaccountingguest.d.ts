import { SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoAccountingConversionOptions } from "./apicoredtoaccountingconversionoptions";
import { ApiCoreDtoAccountingExtendedGrants } from "./apicoredtoaccountingextendedgrants";
import { ApiCoreDtoAccountingHitOptions } from "./apicoredtoaccountinghitoptions";
import { ApiCoreDtoGrantsGrant } from "./apicoredtograntsgrant";
export declare enum ApiCoreDtoAccountingGuestTimeFormatEnum {
    AmPm = "AmPm",
    H24 = "H24"
}
/**
 * Guest object to create
 */
export declare class ApiCoreDtoAccountingGuest extends SpeakeasyBase {
    apiKey?: string;
    conversionOptions?: ApiCoreDtoAccountingConversionOptions;
    /**
     *  (A date in "YmdHis" format)
     */
    creationDate?: string;
    currentGrant?: ApiCoreDtoGrantsGrant;
    dateFormat?: string;
    decimalSeparator?: string;
    email?: string;
    extendedGrants?: ApiCoreDtoAccountingExtendedGrants;
    groupGrants?: number;
    hitOptions?: ApiCoreDtoAccountingHitOptions;
    id?: number;
    key?: string;
    language?: string;
    loginCount?: number;
    name?: string;
    notes?: string;
    numberGroupSeparator?: string;
    password?: string;
    timeFormat?: ApiCoreDtoAccountingGuestTimeFormatEnum;
    timeZone?: number;
    /**
     *  (A date in "YmdHis" format)
     */
    timeframeMinDate?: string;
    timezonename?: string;
    tlGrants?: number;
    tpGrants?: number;
    userName?: string;
}
