import { SpeakeasyBase } from "../../../internal/utils";
import { ReportTypeEnum } from "./reporttypeenum";
/**
 * Success
 */
export declare class ListThingRegistrationTaskReportsResponse extends SpeakeasyBase {
    nextToken?: string;
    reportType?: ReportTypeEnum;
    resourceLinks?: string[];
}
