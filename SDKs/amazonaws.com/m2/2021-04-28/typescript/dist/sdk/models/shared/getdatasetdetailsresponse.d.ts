import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetDetailOrgAttributes } from "./datasetdetailorgattributes";
/**
 * Success
 */
export declare class GetDataSetDetailsResponse extends SpeakeasyBase {
    blocksize?: number;
    creationTime?: Date;
    dataSetName: string;
    dataSetOrg?: DatasetDetailOrgAttributes;
    lastReferencedTime?: Date;
    lastUpdatedTime?: Date;
    location?: string;
    recordLength?: number;
}
