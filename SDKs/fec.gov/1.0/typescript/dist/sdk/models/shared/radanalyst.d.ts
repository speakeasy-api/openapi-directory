import { SpeakeasyBase } from "../../../internal/utils";
export declare class RadAnalyst extends SpeakeasyBase {
    /**
     * ID of RAD analyst.
     */
    analystId?: number;
    /**
     * Short ID of RAD analyst.
     */
    analystShortId?: number;
    /**
     * Date of most recent RAD analyst assignment change
     */
    assignmentUpdateDate?: Date;
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId: string;
    /**
     * The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
     */
    committeeName?: string;
    /**
     * Email of RAD analyst
     */
    email?: string;
    /**
     * Fist name of RAD analyst
     */
    firstName?: string;
    /**
     * Last name of RAD analyst
     */
    lastName?: string;
    /**
     * Branch of RAD analyst
     */
    radBranch?: string;
    /**
     * Telephone extension of RAD analyst
     */
    telephoneExt?: number;
    /**
     * Title of RAD analyst
     */
    title?: string;
}
