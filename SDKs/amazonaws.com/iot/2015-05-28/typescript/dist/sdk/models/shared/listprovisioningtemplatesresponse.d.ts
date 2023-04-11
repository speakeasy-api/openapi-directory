import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningTemplateSummary } from "./provisioningtemplatesummary";
/**
 * Success
 */
export declare class ListProvisioningTemplatesResponse extends SpeakeasyBase {
    nextToken?: string;
    templates?: ProvisioningTemplateSummary[];
}
