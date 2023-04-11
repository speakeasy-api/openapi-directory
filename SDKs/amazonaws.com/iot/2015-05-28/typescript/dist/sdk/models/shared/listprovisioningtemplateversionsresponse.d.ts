import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningTemplateVersionSummary } from "./provisioningtemplateversionsummary";
/**
 * Success
 */
export declare class ListProvisioningTemplateVersionsResponse extends SpeakeasyBase {
    nextToken?: string;
    versions?: ProvisioningTemplateVersionSummary[];
}
