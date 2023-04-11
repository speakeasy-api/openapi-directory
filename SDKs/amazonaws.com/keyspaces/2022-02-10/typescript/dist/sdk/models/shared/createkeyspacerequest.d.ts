import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateKeyspaceRequest extends SpeakeasyBase {
    keyspaceName: string;
    tags?: Tag[];
}
