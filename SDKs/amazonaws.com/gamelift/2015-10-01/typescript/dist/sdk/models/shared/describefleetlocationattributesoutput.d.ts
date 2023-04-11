import { SpeakeasyBase } from "../../../internal/utils";
import { LocationAttributes } from "./locationattributes";
/**
 * Success
 */
export declare class DescribeFleetLocationAttributesOutput extends SpeakeasyBase {
    fleetArn?: string;
    fleetId?: string;
    locationAttributes?: LocationAttributes[];
    nextToken?: string;
}
