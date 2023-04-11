import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateOptOutListRequest extends SpeakeasyBase {
    clientToken?: string;
    optOutListName: string;
    tags?: Tag[];
}
