import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateFilterRequest extends SpeakeasyBase {
    datasetGroupArn: string;
    filterExpression: string;
    name: string;
    tags?: Tag[];
}
