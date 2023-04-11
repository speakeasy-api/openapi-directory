import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReportDate extends SpeakeasyBase {
    /**
     * Date the record was created
     */
    createDate?: Date;
    /**
     * Date the report is due
     */
    dueDate?: Date;
    reportType?: string;
    reportTypeFull?: string;
    /**
     *
     * @remarks
     * Forms with coverage date -
     *     year from the coverage ending date.
     * Forms without coverage date -
     *     year from the receipt date.
     *
     */
    reportYear?: number;
    /**
     * Date the record was updated
     */
    updateDate?: Date;
}
