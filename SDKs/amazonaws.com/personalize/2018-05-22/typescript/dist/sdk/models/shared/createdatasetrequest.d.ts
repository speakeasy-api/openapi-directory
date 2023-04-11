import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateDatasetRequest extends SpeakeasyBase {
    datasetGroupArn: string;
    datasetType: string;
    name: string;
    schemaArn: string;
    tags?: Tag[];
}
