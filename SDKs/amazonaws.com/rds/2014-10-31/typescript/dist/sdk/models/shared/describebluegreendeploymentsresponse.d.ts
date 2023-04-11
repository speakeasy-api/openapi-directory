import { SpeakeasyBase } from "../../../internal/utils";
import { BlueGreenDeployment } from "./bluegreendeployment";
/**
 * Success
 */
export declare class DescribeBlueGreenDeploymentsResponse extends SpeakeasyBase {
    blueGreenDeployments?: BlueGreenDeployment[];
    marker?: string;
}
