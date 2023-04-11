import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ImportHostKeyRequest extends SpeakeasyBase {
    description?: string;
    hostKeyBody: string;
    serverId: string;
    tags?: Tag[];
}
