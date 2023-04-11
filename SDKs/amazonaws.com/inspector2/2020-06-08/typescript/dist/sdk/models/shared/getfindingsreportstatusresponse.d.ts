import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { ExternalReportStatusEnum } from "./externalreportstatusenum";
import { FilterCriteria } from "./filtercriteria";
import { ReportingErrorCodeEnum } from "./reportingerrorcodeenum";
/**
 * Success
 */
export declare class GetFindingsReportStatusResponse extends SpeakeasyBase {
    destination?: Destination;
    errorCode?: ReportingErrorCodeEnum;
    errorMessage?: string;
    filterCriteria?: FilterCriteria;
    reportId?: string;
    status?: ExternalReportStatusEnum;
}
