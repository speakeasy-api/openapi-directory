import { SpeakeasyBase } from "../../../internal/utils";
import { UnifiedFile } from "./unifiedfile";
export declare class GetFileResponse extends SpeakeasyBase {
    data: UnifiedFile;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
