import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceTemplateSummary } from "./servicetemplatesummary";
/**
 * Success
 */
export declare class ListServiceTemplatesOutput extends SpeakeasyBase {
    nextToken?: string;
    templates: ServiceTemplateSummary[];
}
