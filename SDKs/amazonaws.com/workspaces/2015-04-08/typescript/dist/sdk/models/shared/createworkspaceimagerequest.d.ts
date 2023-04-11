import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateWorkspaceImageRequest extends SpeakeasyBase {
    description: string;
    name: string;
    tags?: Tag[];
    workspaceId: string;
}
