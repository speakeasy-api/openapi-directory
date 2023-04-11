import { SpeakeasyBase } from "../../../internal/utils";
import { RDSDataSpec } from "./rdsdataspec";
export declare class CreateDataSourceFromRDSInput extends SpeakeasyBase {
    computeStatistics?: boolean;
    dataSourceId: string;
    dataSourceName?: string;
    rdsData: RDSDataSpec;
    roleARN: string;
}
