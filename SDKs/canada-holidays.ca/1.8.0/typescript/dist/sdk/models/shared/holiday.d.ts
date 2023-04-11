import { SpeakeasyBase } from "../../../internal/utils";
import { Province } from "./province";
/**
 * Whether this holiday is observed by federally-regulated industries.
 */
export declare enum HolidayFederalEnum {
    One = "1",
    Zero = "0"
}
/**
 * Whether this is a province-wide statutory holiday, or one that is optional for employers.
 */
export declare enum HolidayOptionalEnum {
    One = "1"
}
/**
 * A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday.
 */
export declare class Holiday extends SpeakeasyBase {
    /**
     * ISO date: the literal date of the holiday
     */
    date: Date;
    /**
     * Whether this holiday is observed by federally-regulated industries.
     */
    federal: HolidayFederalEnum;
    /**
     * Primary key for a holiday
     */
    id: number;
    /**
     * English name
     */
    nameEn: string;
    /**
     * French name
     */
    nameFr: string;
    /**
     * ISO date: when this holiday is observed
     */
    observedDate: Date;
    /**
     * Whether this is a province-wide statutory holiday, or one that is optional for employers.
     */
    optional?: HolidayOptionalEnum;
    provinces?: Province[];
}
