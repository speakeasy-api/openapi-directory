import { SpeakeasyBase } from "../../../internal/utils";
import { Fleet } from "./fleet";
/**
 * Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 */
export declare class ListFleetsResponse extends SpeakeasyBase {
    fleetDetails?: Fleet[];
    nextToken?: string;
}
