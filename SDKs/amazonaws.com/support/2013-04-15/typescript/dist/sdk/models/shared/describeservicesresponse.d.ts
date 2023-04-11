import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * The list of Amazon Web Services services returned by the <a>DescribeServices</a> operation.
 */
export declare class DescribeServicesResponse extends SpeakeasyBase {
    services?: Service[];
}
