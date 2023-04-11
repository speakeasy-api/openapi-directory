import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateInstanceProfileRequest extends SpeakeasyBase {
    instanceProfileName: string;
    path?: string;
    tags?: Tag[];
}
