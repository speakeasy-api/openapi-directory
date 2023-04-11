import { SpeakeasyBase } from "../../../internal/utils";
import { AppComponentCompliance } from "./appcomponentcompliance";
/**
 * Success
 */
export declare class ListAppComponentCompliancesResponse extends SpeakeasyBase {
    componentCompliances: AppComponentCompliance[];
    nextToken?: string;
}
