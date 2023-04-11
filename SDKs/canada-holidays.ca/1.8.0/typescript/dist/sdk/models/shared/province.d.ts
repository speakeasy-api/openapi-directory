import { SpeakeasyBase } from "../../../internal/utils";
import { Holiday } from "./holiday";
/**
 * Canadian province abbreviations
 */
export declare enum ProvinceIdEnum {
    Ab = "AB",
    Bc = "BC",
    Mb = "MB",
    Nb = "NB",
    Nl = "NL",
    Ns = "NS",
    Nt = "NT",
    Nu = "NU",
    On = "ON",
    Pe = "PE",
    Qc = "QC",
    Sk = "SK",
    Yt = "YT"
}
/**
 * Whether this province optionally observes a given holiday.
 */
export declare enum ProvinceOptionalEnum {
    One = "1"
}
/**
 * A Canadian province or territory
 */
export declare class Province extends SpeakeasyBase {
    /**
     * Canadian province abbreviations
     */
    id: ProvinceIdEnum;
    /**
     * English name
     */
    nameEn: string;
    /**
     * French name
     */
    nameFr: string;
    /**
     * A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday.
     */
    nextHoliday?: Holiday;
    /**
     * Whether this province optionally observes a given holiday.
     */
    optional?: ProvinceOptionalEnum;
    provinces?: Holiday[];
    /**
     * Name of reference page with public holidays for this region
     */
    sourceEn: string;
    /**
     * URL to public holidays reference for this region
     */
    sourceLink: string;
}
