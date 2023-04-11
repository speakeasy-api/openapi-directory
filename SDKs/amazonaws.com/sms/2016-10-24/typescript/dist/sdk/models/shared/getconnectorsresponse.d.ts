import { SpeakeasyBase } from "../../../internal/utils";
import { Connector } from "./connector";
/**
 * Success
 */
export declare class GetConnectorsResponse extends SpeakeasyBase {
    connectorList?: Connector[];
    nextToken?: string;
}
