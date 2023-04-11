import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ImportModelRequest extends SpeakeasyBase {
    dataAccessRoleArn?: string;
    modelKmsKeyId?: string;
    modelName?: string;
    sourceModelArn: string;
    tags?: Tag[];
    versionName?: string;
}
