import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class DescribeDashboardResponse extends SpeakeasyBase {
    dashboardArn: string;
    dashboardCreationDate: Date;
    dashboardDefinition: string;
    dashboardDescription?: string;
    dashboardId: string;
    dashboardLastUpdateDate: Date;
    dashboardName: string;
    projectId: string;
}
