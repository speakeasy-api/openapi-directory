import { SpeakeasyBase } from "../../../internal/utils";
import { LocationFilterNameEnum } from "./locationfilternameenum";
import { OperatorEnum } from "./operatorenum";
/**
 * <p>Narrow down the list of resources returned by <code>ListLocations</code>. For example, to see all your Amazon S3 locations, create a filter using <code>"Name": "LocationType"</code>, <code>"Operator": "Equals"</code>, and <code>"Values": "S3"</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/query-resources.html">filtering resources</a>.</p>
 */
export declare class LocationFilter extends SpeakeasyBase {
    name: LocationFilterNameEnum;
    operator: OperatorEnum;
    values: string[];
}
