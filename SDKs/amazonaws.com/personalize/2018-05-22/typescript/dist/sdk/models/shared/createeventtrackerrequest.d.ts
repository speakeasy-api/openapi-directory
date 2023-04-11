import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateEventTrackerRequest extends SpeakeasyBase {
    datasetGroupArn: string;
    name: string;
    tags?: Tag[];
}
