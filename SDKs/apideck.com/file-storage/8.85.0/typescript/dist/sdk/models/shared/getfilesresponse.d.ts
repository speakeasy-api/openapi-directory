import { SpeakeasyBase } from "../../../internal/utils";
import { UnifiedFile } from "./unifiedfile";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetFilesResponse extends SpeakeasyBase {
    data: UnifiedFile[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
