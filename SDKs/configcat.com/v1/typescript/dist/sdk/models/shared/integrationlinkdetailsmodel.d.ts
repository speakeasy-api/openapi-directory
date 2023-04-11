import { SpeakeasyBase } from "../../../internal/utils";
import { IntegrationLinkDetail } from "./integrationlinkdetail";
/**
 * When everything is ok, the details for the integration link returned.
 */
export declare class IntegrationLinkDetailsModel extends SpeakeasyBase {
    allIntegrationLinkCount?: number;
    details?: IntegrationLinkDetail[];
}
