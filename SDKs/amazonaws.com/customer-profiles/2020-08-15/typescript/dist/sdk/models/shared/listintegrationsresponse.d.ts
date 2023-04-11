import { SpeakeasyBase } from "../../../internal/utils";
import { ListIntegrationItem } from "./listintegrationitem";
/**
 * Success
 */
export declare class ListIntegrationsResponse extends SpeakeasyBase {
    items?: ListIntegrationItem[];
    nextToken?: string;
}
