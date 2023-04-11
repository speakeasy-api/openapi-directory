import { SpeakeasyBase } from "../../../internal/utils";
import { Robot } from "./robot";
/**
 * Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 */
export declare class ListRobotsResponse extends SpeakeasyBase {
    nextToken?: string;
    robots?: Robot[];
}
