import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateUserRequest extends SpeakeasyBase {
    path?: string;
    permissionsBoundary?: string;
    tags?: Tag[];
    userName: string;
}
