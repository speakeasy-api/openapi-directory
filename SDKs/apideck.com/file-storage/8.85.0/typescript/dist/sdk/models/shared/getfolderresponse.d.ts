import { SpeakeasyBase } from "../../../internal/utils";
import { Folder } from "./folder";
export declare class GetFolderResponse extends SpeakeasyBase {
    data: Folder;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
