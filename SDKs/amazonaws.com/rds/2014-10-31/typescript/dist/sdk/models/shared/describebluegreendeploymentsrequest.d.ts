import { SpeakeasyBase } from "../../../internal/utils";
import { FilterList } from "./filterlist";
export declare class DescribeBlueGreenDeploymentsRequest extends SpeakeasyBase {
    blueGreenDeploymentIdentifier?: string;
    filters?: FilterList[];
    marker?: string;
    maxRecords?: number;
}
