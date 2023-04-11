import { SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";
import { TriangulationEventTypeEnum } from "./triangulationeventtypeenum";
/**
 * Information about the network impairment for a specific network measured by Amazon CloudWatch Internet Monitor.
 */
export declare class NetworkImpairment extends SpeakeasyBase {
    asPath: Network[];
    networkEventType: TriangulationEventTypeEnum;
    networks: Network[];
}
