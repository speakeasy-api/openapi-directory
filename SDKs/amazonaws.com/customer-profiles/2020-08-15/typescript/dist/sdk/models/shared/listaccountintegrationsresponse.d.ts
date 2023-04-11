import { SpeakeasyBase } from "../../../internal/utils";
import { ListIntegrationItem } from "./listintegrationitem";
/**
 * Success
 */
export declare class ListAccountIntegrationsResponse extends SpeakeasyBase {
    items?: ListIntegrationItem[];
    nextToken?: string;
}
