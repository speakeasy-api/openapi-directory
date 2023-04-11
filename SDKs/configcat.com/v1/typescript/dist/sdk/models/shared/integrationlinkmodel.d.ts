import { SpeakeasyBase } from "../../../internal/utils";
import { IntegrationLinkTypeEnum } from "./integrationlinktypeenum";
/**
 * When everything is ok, the integration link data returned.
 */
export declare class IntegrationLinkModel extends SpeakeasyBase {
    description?: string;
    integrationLinkType?: IntegrationLinkTypeEnum;
    key?: string;
    url?: string;
}
