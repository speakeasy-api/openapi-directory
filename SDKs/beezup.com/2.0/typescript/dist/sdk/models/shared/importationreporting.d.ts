import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { ImportationReportingLinks } from "./importationreportinglinks";
/**
 * The catalog importation reporting
**/
export declare class ImportationReporting extends SpeakeasyBase {
    autoImported?: boolean;
    beginUtcDate: Date;
    endUtcDate?: Date;
    errors?: BeezUpCommonUserErrorMessage[];
    executionId: string;
    inputConfigurationUrl?: string;
    lastUpdateUtcDate: Date;
    links?: ImportationReportingLinks;
    stepName?: string;
    steps: Record<string, boolean>;
    success?: boolean;
    totalProductCount?: number;
    totalProductErrorCount?: number;
    totalProductSuccessCount?: number;
    userId?: string;
}
